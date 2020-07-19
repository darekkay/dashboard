import request from "supertest";

import axios from "axios";

import app from "../../app";
import { parseQuery, QueryType } from "../github";

const userMockResponse = {
  data: {
    name: "Darek Kay",
    login: "darekkay",
    followers: 85,
  },
};

const useRepositoriesMockResponse = {
  data: [
    {
      stargazers_count: 1,
      forks_count: 2,
      open_issues: 3,
    },
    {
      stargazers_count: 2,
      forks_count: 4,
      open_issues: 6,
    },
    {
      stargazers_count: 4,
      forks_count: 8,
      open_issues: 12,
    },
  ],
};

const repositoryMockResponse = {
  data: {
    name: "dashboard",
    full_name: "darekkay/dashboard",
    description: "Customizable personal dashboard and startpage",
    stargazers_count: 35,
    watchers_count: 40,
    forks_count: 2,
    open_issues_count: 5,
    subscribers_count: 6,
  },
};

describe("github", () => {
  describe("parseQuery", () => {
    it("should differentiate between user and repository automatically", () => {
      const assertions: Array<[
        string,
        { id: string; queryType: QueryType }
      ]> = [
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
    it("should recognize a user", () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get.mockResolvedValueOnce(userMockResponse);
      mockedAxios.get.mockResolvedValueOnce(useRepositoriesMockResponse);

      return request(app)
        .get("/github/stats")
        .query({ query: "darekkay" })
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.name).toBe("darekkay");
          expect(response.body.followers).toBe(85);
          expect(response.body.stars).toBe(7);
          expect(response.body.forks).toBe(14);
          expect(response.body.open_issues).toBe(21);
        });
    });

    it("should recognize a repository", () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get.mockResolvedValue(repositoryMockResponse);

      return request(app)
        .get("/github/stats")
        .query({ query: "darekkay/dashboard" })
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.name).toBe("darekkay/dashboard");
          expect(response.body.stars).toBe(35);
          expect(response.body.forks).toBe(2);
          expect(response.body.open_issues).toBe(5);
          expect(response.body.subscribers).toBe(6);
        });
    });

    it("should return 422 if the query type cannot be derived", () => {
      return request(app)
        .get("/github/stats")
        .query({ query: "da/rek/kay" })
        .expect(422);
    });

    it("should return 404 if the username cannot be found", () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get.mockImplementation(() => {
        throw { response: { status: 404 } };
      });
      return request(app)
        .get("/github/stats")
        .query({ query: "darekkay12345" })
        .expect(404);
    });
  });
});
