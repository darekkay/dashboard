import request from "supertest";
import axios from "axios";

import app from "../../app";
import logger from "@darekkay/logger";

import openweatherMockResponse from "./__examples__/weather.json";

describe("weather", () => {
  afterEach(() => {
    jest.resetAllMocks();
    logger.setLevel("error");
  });

  it("should return a valid response", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(openweatherMockResponse);

    return request(app)
      .get("/weather")
      .query({ lat: "52.17", lon: "11.67", unit: "metric" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.current.temperature).toBe(24);
        expect(response.body.forecast).toHaveLength(8);
        expect(response.body.forecast[0].temperatureMin).toBe(18);
        expect(response.body.forecast[0].temperatureMax).toBe(25);
      });
  });

  it("returns 400 if the query parameters are missing", async () => {
    return request(app).get("/weather").expect(400);
  });

  it("returns 500 if the 3rd party response is invalid", async () => {
    logger.setLevel("silent");
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({ data: {} });

    return request(app)
      .get("/weather")
      .query({ lat: "52.17", lon: "11.67", unit: "metric" })
      .expect(500);
  });
});
