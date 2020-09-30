import request from "supertest";
import axios from "axios";
import logger from "@darekkay/logger";

import app from "../../app";

import twitterUserMockResponse from "./__examples__/twitter-user.json";

describe("twitter", () => {
  afterEach(() => {
    jest.resetAllMocks();
    logger.setLevel("error");
  });

  it("should return a valid response", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(twitterUserMockResponse);

    return request(app)
      .get("/twitter/user")
      .query({ username: "darek_kay" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.name).toBe("Darek Kay");
        // TODO: finish test
      });
  });

  it("returns 400 if the query parameters are missing", async () => {
    return request(app).get("/twitter/user").expect(400);
  });

  it("returns 404 if the 3rd party BE returns a 200 error", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        errors: [{ title: "Not Found Error" }],
      },
    });
    return request(app)
      .get("/twitter/user")
      .query({ username: "darek_kay" })
      .expect(404);
  });

  it("returns 500 if the 3rd party response is invalid", async () => {
    logger.setLevel("silent");
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({});

    return request(app)
      .get("/twitter/user")
      .query({ username: "darek_kay" })
      .expect(500);
  });
});
