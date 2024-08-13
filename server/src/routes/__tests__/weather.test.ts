import request from "supertest";
import logger from "@darekkay/logger";

import axios from "axios";

import app from "../../app";
import openMeteoMockResponse from "./__examples__/weather.json";

describe("weather", () => {
  afterEach(() => {
    logger.setLevel("error");
  });

  test("should return a valid response", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(openMeteoMockResponse);

    return request(app)
      .get("/weather")
      .query({ lat: "52.17", lon: "11.67", unit: "metric" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.current.temperature).toBe(24);
        expect(response.body.forecast).toHaveLength(5);
        expect(response.body.forecast[0].temperatureMin).toBe(18);
        expect(response.body.forecast[0].temperatureMax).toBe(25);
      });
  });

  test("returns 400 if the query parameters are missing", async () => {
    return request(app).get("/weather").expect(400);
  });

  test("returns 500 if the 3rd party response is invalid", async () => {
    logger.setLevel("silent");
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({ data: {} });

    return request(app)
      .get("/weather")
      .query({ lat: "52.17", lon: "11.67", unit: "metric" })
      .expect(500);
  });
});
