import { renderHook } from "common/testing";

import useMountEffect from "../useMountEffect";

describe("useMountEffect", () => {
  test("calls the callback only on mount", () => {
    const fn = jest.fn();

    const { rerender } = renderHook(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ callback, dummyProp }) => {
        useMountEffect(callback);
      },
      {
        initialProps: {
          callback: fn,
          dummyProp: 1
        }
      }
    );

    expect(fn).toHaveBeenCalledTimes(1);
    rerender({ callback: fn, dummyProp: 2 });
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
