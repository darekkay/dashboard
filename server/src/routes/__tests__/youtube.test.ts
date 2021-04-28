import request from "supertest";
import logger from "@darekkay/logger";

import axios from "axios";

import app from "../../app";
import youtubeChannelMockResponse from "./__examples__/youtube-channel.json";

describe("youtube", () => {
  afterEach(() => {
    jest.resetAllMocks();
    logger.setLevel("error");
  });

  test("should return a valid response", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(youtubeChannelMockResponse);

    return request(app)
      .get("/youtube/stats")
      .query({ query: "darekkay" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.channelTitle).toBe("Darek Kay");
        expect(response.body.viewCount).toBe(17897);
        expect(response.body.subscriberCount).toBe(58);
        expect(response.body.videoCount).toBe(7);
      });
  });

  test("handles channel URLs", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(youtubeChannelMockResponse);

    return request(app)
      .get("/youtube/stats")
      .query({
        query: "https://www.youtube.com/channel/UCdTs-47tRqaos6LpKeDxx7w",
      })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("handles URL aliases", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(youtubeChannelMockResponse);

    return request(app)
      .get("/youtube/stats")
      .query({ query: "https://www.youtube.com/c/darekkay" })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("handles user URLs", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(youtubeChannelMockResponse);

    return request(app)
      .get("/youtube/stats")
      .query({ query: "https://www.youtube.com/user/darekkay" })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("handles channel IDs", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(youtubeChannelMockResponse);

    return request(app)
      .get("/youtube/stats")
      .query({ query: "UCdTs-47tRqaos6LpKeDxx7w" })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("returns 400 if the query parameters are missing", async () => {
    return request(app).get("/youtube/stats").expect(400);
  });

  test("returns 404 if the 3rd party BE doesn't return any items", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({
      data: {},
    });
    return request(app)
      .get("/youtube/stats")
      .query({ query: "darekkay" })
      .expect(404);
  });

  test("returns 500 if the 3rd party response is invalid", async () => {
    logger.setLevel("silent");
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({
      items: [{}],
    });

    return request(app)
      .get("/youtube/stats")
      .query({ query: "darekkay" })
      .expect(500);
  });
});
