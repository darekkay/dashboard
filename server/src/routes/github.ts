import {
  Express,
  Request,
  Response,
  NextFunction
} from "express-serve-static-core";

import axios from "../axios";

const TTL = 23.5 * 60 * 60; // TODO: Derive TTL from widget's update cycle

export type QueryType = "user" | "repository" | "unknown";

/* This endpoint offers both repository and user statistics. Instead of asking the user for selecting the type, we can derive it from the query. */
export const parseQuery = (
  query: string
): { id: string; queryType: QueryType } => {
  const splitBySlashes = query.toLowerCase().split("/");

  // remove trailing slash
  if (splitBySlashes[0] === "") splitBySlashes.shift();

  // remove pending slash
  if (splitBySlashes[splitBySlashes.length - 1] === "") splitBySlashes.pop();

  // remove everything before (and including) "github.com"
  if (splitBySlashes.includes("github.com")) {
    splitBySlashes.splice(0, splitBySlashes.indexOf("github.com") + 1);
  }

  if (splitBySlashes.length === 1)
    return { id: splitBySlashes.join("/"), queryType: "user" };
  if (splitBySlashes.length === 2)
    return { id: splitBySlashes.join("/"), queryType: "repository" };

  return {
    id: "unknown",
    queryType: "unknown"
  };
};

const sumUmPropertyForAllRepositories = (
  repositories: any[],
  property: string
) =>
  repositories
    .filter((repo: any) => !repo.fork)
    .reduce((acc: any, repository: any) => {
      return acc + repository[property];
    }, 0);

/* User stats are split in two different GitHub endpoints: users/:user for general stats and users/:user/repos for repo stats */
const fetchUserStats = async (user: string) => {
  const userResponse = await axios.get(`https://api.github.com/users/${user}`, {
    ttl: TTL
  });

  const userRepositoriesResponse = await axios.get(
    `https://api.github.com/users/${user}/repos`,
    {
      ttl: TTL
    }
  );

  return {
    name: userResponse.data.login,
    followers: userResponse.data.followers,
    stars: sumUmPropertyForAllRepositories(
      userRepositoriesResponse.data,
      "stargazers_count"
    ),
    forks: sumUmPropertyForAllRepositories(
      userRepositoriesResponse.data,
      "forks_count"
    ),
    open_issues: sumUmPropertyForAllRepositories(
      userRepositoriesResponse.data,
      "open_issues"
    )
  };
};

const fetchRepositoryStats = async (repository: string) => {
  const repositoryResponse = (
    await axios.get(`https://api.github.com/repos/${repository}`, {
      ttl: TTL
    })
  ).data;

  return {
    name: repositoryResponse.full_name,
    stars: repositoryResponse.stargazers_count,
    subscribers: repositoryResponse.subscribers_count,
    forks: repositoryResponse.forks_count,
    open_issues: repositoryResponse.open_issues_count
  };
};

const routes = (app: Express) =>
  /* Get the current price for a cryptocurrency */
  app.get(
    "/github/stats",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { query } = req.query;
        const { id, queryType } = parseQuery(query);

        let response;

        if (queryType === "user") response = await fetchUserStats(id);
        else if (queryType === "repository")
          response = await fetchRepositoryStats(id);
        else return res.status(422).end(); // unprocessable entity

        res.json(response);
      } catch (error) {
        next(error);
      }
    }
  );

export default routes;
