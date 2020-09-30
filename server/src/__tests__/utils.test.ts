import logger from "@darekkay/logger";
import { ttlForWidgetType, TTL_OFFSET, DEFAULT_TTL } from "../utils";

describe("utils", () => {
  describe("ttlForWidgetType", () => {
    test("returns the TTL (time to live) for available widgets", () => {
      expect(ttlForWidgetType("totd-chemical-elements")).toBe(
        24 * 60 * 60 - TTL_OFFSET
      );
    });

    test("returns default TTL for unsupported widgets", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error").mockImplementation();
      expect(ttlForWidgetType("date-time")).toBe(DEFAULT_TTL);
      expect(loggerErrorSpy).toHaveBeenCalledTimes(1);
      loggerErrorSpy.mockRestore();
    });

    test("returns default TTL for unknown widgets", () => {
      const loggerErrorSpy = jest.spyOn(logger, "error").mockImplementation();
      expect(ttlForWidgetType("unknown")).toBe(DEFAULT_TTL);
      expect(loggerErrorSpy).toHaveBeenCalledTimes(1);
      loggerErrorSpy.mockRestore();
    });
  });
});
