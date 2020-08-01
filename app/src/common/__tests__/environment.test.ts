import { toBoolean } from "common/environment";

describe("toBoolean", () => {
  test("returns true only if the value equals 'true' (case insensitive)", () => {
    expect(toBoolean("true")).toBe(true);
    expect(toBoolean("TRUE")).toBe(true);
    expect(toBoolean("True")).toBe(true);

    expect(toBoolean("false")).toBe(false);
    expect(toBoolean("")).toBe(false);
    expect(toBoolean()).toBe(false);
  });
});
