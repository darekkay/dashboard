import request from "supertest";
import logger from "@darekkay/logger";

import axios from "axios";

import app from "../../app";
import unsplashImageMockResponse from "./__examples__/unsplash-image.json";

describe("unsplash", () => {
  afterEach(() => {
    jest.resetAllMocks();
    logger.setLevel("error");
  });

  test("should return a random image", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(unsplashImageMockResponse);

    return request(app)
      .get("/unsplash/random")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.imageUrl).toBe(
          "https://images.unsplash.com/photo-1600056926106-78f915b94f63?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3Mzg3NX0"
        );
        expect(response.body.authorName).toBe("Josh Withers");
        expect(response.body.authorUrl).toBe(
          "https://unsplash.com/@joshwithers"
        );
      });
  });

  test("returns 500 if the 3rd party response is invalid", async () => {
    logger.setLevel("silent");
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({});

    return request(app).get("/unsplash/random").expect(500);
  });
});
