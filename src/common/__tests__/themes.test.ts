import { objectToStyleString } from "../themes";

describe("objectToStyleString", () => {
  it("converts object to style string", () => {
    const theme = {
      a: "1",
      b: "2",
      c: "3"
    };
    expect(objectToStyleString(theme)).toEqual("a:1; b:2; c:3");
  });

  it("returns empty string for an empty object", () => {
    expect(objectToStyleString({})).toEqual("");
  });
});
