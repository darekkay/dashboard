import request from "supertest";
import axios from "axios";
import logger from "@darekkay/logger";

import app from "../../app";

const mockResponse = {
  data: {
    value: 47,
  },
  headers: {
    "content-type": "application/json",
  },
};

describe("passthrough", () => {
  afterEach(() => {
    jest.resetAllMocks();
    logger.setLevel("error");
  });

  it("should pass through a request", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    return request(app)
      .get("/passthrough")
      .query({ url: "https://example.com" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.value).toBe(47);
      });
  });

  it("returns 400 if the url is missing", async () => {
    return request(app).get("/passthrough").expect(400);
  });

  it("returns a default content-type if it's missing", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({
      data: "example",
    });

    return request(app)
      .get("/passthrough")
      .query({ url: "https://example.com" })
      .expect(200)
      .expect("Content-Type", /text\/html/);
  });

  it("returns 500 if the content-type is invalid", async () => {
    logger.setLevel("silent");
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({
      data: "example",
      headers: {
        "content-type": "unknown",
      },
    });

    return request(app)
      .get("/passthrough")
      .query({ url: "https://example.com" })
      .expect(500);
  });
});
