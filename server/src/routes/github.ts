/* eslint-disable @typescript-eslint/no-unsafe-return,@typescript-eslint/restrict-plus-operands */
import { Controller, Get, Query, Res, Route, TsoaResponse } from "tsoa";

import axios from "../axios";
import { ttlForWidgetType } from "../utils";

const TTL = ttlForWidgetType("github-stats");

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
    queryType: "unknown",
  };
};

const sumUmPropertyForAllRepositories = (
  repositories: any[],
  property: string
) =>
  repositories
    .filter((repo: any) => !repo.fork)
    .reduce((accumulator: any, repository: any) => {
      return accumulator + repository[property];
    }, 0);

/* User stats are split in two different GitHub endpoints: users/:user for general stats and users/:user/repos for repo stats */
const fetchUserStats = async (user: string) => {
  const userResponse = await axios.get(`https://api.github.com/users/${user}`, {
    ttl: TTL,
  });

  const userRepositoriesResponse = await axios.get(
    `https://api.github.com/users/${user}/repos`,
    {
      ttl: TTL,
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
    ),
  };
};

const fetchRepositoryStats = async (repository: string) => {
  const repositoryResponse = (
    await axios.get(`https://api.github.com/repos/${repository}`, {
      ttl: TTL,
    })
  ).data;

  return {
    name: repositoryResponse.full_name,
    stars: repositoryResponse.stargazers_count,
    subscribers: repositoryResponse.subscribers_count,
    forks: repositoryResponse.forks_count,
    open_issues: repositoryResponse.open_issues_count,
  };
};

interface GitHubStats {
  name?: string;
  followers?: number;
  stars?: number;
  subscribers?: number;
  forks?: number;
  open_issues?: number;
}

@Route("/github")
export class GitHubController extends Controller {
  /**
   * Returns stats for a GitHub user or repository.
   *
   * @param query GitHub user or repository
   * @param unprocessableEntity Unprocessable entity
   */
  @Get("/stats")
  public async getGitHubStats(
    @Query() query: string,
    @Res() unprocessableEntity: TsoaResponse<422, { reason: string }>
  ): Promise<GitHubStats> {
    const { id, queryType } = parseQuery(query);

    let axiosResponse;

    if (queryType === "user") axiosResponse = await fetchUserStats(id);
    else if (queryType === "repository")
      axiosResponse = await fetchRepositoryStats(id);
    else
      return unprocessableEntity(422, {
        reason: "Could not infer query type (user vs. repository).",
      });

    return axiosResponse;
  }
}
