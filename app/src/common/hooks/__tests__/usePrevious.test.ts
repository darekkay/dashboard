import { renderHook } from "common/testing";

import usePrevious from "../usePrevious";

describe("usePrevious", () => {
  test("returns the previous value", () => {
    const { result, rerender } = renderHook((value) => usePrevious(value), {
      initialProps: "first" as any,
    });

    // On first render, there is no previous value
    expect(result.current).toBeUndefined();

    // On subsequent renders, the previous value should be returned
    rerender("second");
    expect(result.current).toEqual("first");

    rerender(null);
    expect(result.current).toEqual("second");

    // Supports null values
    rerender("last");
    expect(result.current).toBeNull();
  });
});
