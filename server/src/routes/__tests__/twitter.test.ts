import request from "supertest";
import logger from "@darekkay/logger";

import axios from "axios";

import app from "../../app";
import twitterUserMockResponse from "./__examples__/twitter-user.json";
import { normalizeUsername } from "../twitter";

describe("twitter", () => {
  afterEach(() => {
    logger.setLevel("error");
  });

  test("should return a valid response", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(twitterUserMockResponse);

    return request(app)
      .get("/twitter/user")
      .query({ username: "darek_kay" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.name).toBe("Darek Kay");
        expect(response.body.followers).toBe(99);
        expect(response.body.following).toBe(73);
        expect(response.body.tweets).toBe(215);
        expect(response.body.listed).toBe(5);
      });
  });

  test("handles @ and spaces in username", () => {
    expect(normalizeUsername("  @darek_kay  ")).toBe("darek_kay");
  });

  test("returns 400 if the query parameters are missing", async () => {
    return request(app).get("/twitter/user").expect(400);
  });

  test("returns 404 if the 3rd party BE returns a 200 error", async () => {
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

  test("returns 500 if the 3rd party response is invalid", async () => {
    logger.setLevel("silent");
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({});

    return request(app)
      .get("/twitter/user")
      .query({ username: "darek_kay" })
      .expect(500);
  });
});
