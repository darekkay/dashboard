import axios from "axios";

import { API_BASE_URL } from "common/environment";

// NICE: use some library to automate the API declaration
export const CRYPTOCURRENCIES_PRICE = "/cryptocurrencies/price";

export const GITHUB_STATS = "/github/stats";

export default axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
