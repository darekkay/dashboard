import request from "supertest";
import axios from "axios";
import logger from "@darekkay/logger";

import app from "../../app";
import { parseQuery, QueryType } from "../github";

import repositoryMockResponse from "./__examples__/github-repository.json";
import userMockResponse from "./__examples__/github-user.json";
import userRepositoriesMockResponse from "./__examples__/github-user-repositories.json";

describe("github", () => {
  describe("parseQuery", () => {
    it("should differentiate between user and repository automatically", () => {
      const assertions: Array<
        [string, { id: string; queryType: QueryType }]
      > = [
        // User
        ["darekkay", { id: "darekkay", queryType: "user" }],
        ["/darekkay", { id: "darekkay", queryType: "user" }],
        ["github.com/darekkay", { id: "darekkay", queryType: "user" }],
        ["https://github.com/darekkay", { id: "darekkay", queryType: "user" }],
        ["https://github.com/darekkay/", { id: "darekkay", queryType: "user" }],
        ["HTTPS://GITHUB.COM/DAREKKAY/", { id: "darekkay", queryType: "user" }],

        // Repository
        [
          "darekkay/dashboard",
          { id: "darekkay/dashboard", queryType: "repository" },
        ],
        [
          "/darekkay/dashboard",
          { id: "darekkay/dashboard", queryType: "repository" },
        ],
        [
          "github.com/darekkay/dashboard",
          { id: "darekkay/dashboard", queryType: "repository" },
        ],
        [
          "https://github.com/darekkay/dashboard",
          { id: "darekkay/dashboard", queryType: "repository" },
        ],
        [
          "https://github.com/darekkay/dashboard/",
          { id: "darekkay/dashboard", queryType: "repository" },
        ],
        [
          "HTTPS://GITHUB.COM/DAREKKAY/DASHBOARD/",
          { id: "darekkay/dashboard", queryType: "repository" },
        ],
      ];

      assertions.forEach((assertion) =>
        expect(parseQuery(assertion[0])).toEqual(assertion[1])
      );
    });
  });

  describe("routes", () => {
    afterEach(() => {
      jest.resetAllMocks();
      logger.setLevel("error");
    });

    it("should recognize a user", async () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get.mockResolvedValueOnce(userMockResponse);
      mockedAxios.get.mockResolvedValueOnce(userRepositoriesMockResponse);

      return request(app)
        .get("/github/stats")
        .query({ query: "darekkay" })
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.name).toBe("darekkay");
          expect(response.body.followers).toBe(96);
          expect(response.body.stars).toBe(68);
          expect(response.body.forks).toBe(8);
          expect(response.body.open_issues).toBe(9);
        });
    });

    it("recognizes a repository", async () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get.mockResolvedValue(repositoryMockResponse);

      return request(app)
        .get("/github/stats")
        .query({ query: "darekkay/dashboard" })
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.name).toBe("darekkay/dashboard");
          expect(response.body.stars).toBe(46);
          expect(response.body.forks).toBe(2);
          expect(response.body.open_issues).toBe(6);
          expect(response.body.subscribers).toBe(4);
        });
    });

    it("returns 400 if the query is missing", async () => {
      return request(app).get("/github/stats").expect(400);
    });

    it("returns 422 if the query type cannot be derived", async () => {
      return request(app)
        .get("/github/stats")
        .query({ query: "da/rek/kay" })
        .expect(422);
    });

    it("returns 404 if the username cannot be found", async () => {
      logger.setLevel("silent");
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get.mockImplementation(() => {
        // eslint-disable-next-line no-throw-literal,@typescript-eslint/no-throw-literal
        throw { response: { status: 404 } };
      });
      return request(app)
        .get("/github/stats")
        .query({ query: "darekkay12345" })
        .expect(404);
    });
  });
});
