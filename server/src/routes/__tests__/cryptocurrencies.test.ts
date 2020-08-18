import request from "supertest";
import axios from "axios";

import app from "../../app";
import logger from "@darekkay/logger";

import coingeckoMockResponse from "./__examples__/cryptocurrencies.json";

describe("cryptocurrencies", () => {
  afterEach(() => {
    jest.resetAllMocks();
    logger.setLevel("error");
  });

  it("should return a valid response", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(coingeckoMockResponse);

    return request(app)
      .get("/cryptocurrencies/price")
      .query({ crypto: "bitcoin", fiat: "eur" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.currentPrice).toBe(9872.58);
        expect(response.body.last24h.change).toBe(-407.71);
        expect(response.body.last24h.changePercentage).toBe(-3.97);
        expect(response.body.imageUrl).toBe(
          "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
        );
      });
  });

  it("returns 400 if the query parameters are missing", async () => {
    return request(app).get("/cryptocurrencies/price").expect(400);
  });

  it("returns 500 if the 3rd party response is invalid", async () => {
    logger.setLevel("silent");
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({ data: {} });

    return request(app)
      .get("/cryptocurrencies/price")
      .query({ crypto: "bitcoin", fiat: "eur" })
      .expect(500);
  });
});
