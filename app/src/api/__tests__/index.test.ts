import axios from "axios";

import { passthrough } from "../index";

describe("api", () => {
  test("calls a passthrough api call", () => {
    const axiosGet = jest.fn();
    // @ts-expect-error
    jest.spyOn(axios, "create").mockImplementation(() => ({
      get: axiosGet,
    }));

    passthrough({ url: "https://example.com" });

    expect(axiosGet).toHaveBeenCalledWith("/passthrough", {
      params: { url: "https://example.com" },
    });
  });
});
