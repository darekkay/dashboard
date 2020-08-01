/* Based on https://github.com/streamich/react-use/blob/master/tests/useToggle.test.ts */
import { hookAct, renderHook } from "common/testing";

import useToggle from "../useToggle";

const setUp = (initialValue: boolean) =>
  renderHook(() => useToggle(initialValue));

describe("useToggle", () => {
  test("should init state to true", () => {
    const { result } = setUp(true);

    expect(result.current[0]).toBe(true);
    expect(typeof result.current[1]).toBe("function");
  });

  test("should init state to false", () => {
    const { result } = setUp(false);

    expect(result.current[0]).toBe(false);
    expect(result.current[1]).toBeInstanceOf(Function);
  });

  test("should set state to true", () => {
    const { result } = setUp(false);
    const [, toggle] = result.current;

    expect(result.current[0]).toBe(false);

    hookAct(() => {
      toggle(true);
    });

    expect(result.current[0]).toBe(true);
  });

  test("should set state to false", () => {
    const { result } = setUp(true);
    const [, toggle] = result.current;

    expect(result.current[0]).toBe(true);

    hookAct(() => {
      toggle(false);
    });

    expect(result.current[0]).toBe(false);
  });

  test("should toggle state from true", () => {
    const { result } = setUp(true);
    const [, toggle] = result.current;

    hookAct(() => {
      toggle();
    });

    expect(result.current[0]).toBe(false);
  });

  test("should toggle state from false", () => {
    const { result } = setUp(false);
    const [, toggle] = result.current;

    hookAct(() => {
      toggle();
    });

    expect(result.current[0]).toBe(true);
  });

  test("should ignore non-boolean parameters and toggle state", () => {
    const { result } = setUp(true);
    const [, toggle] = result.current;

    hookAct(() => {
      toggle("string");
    });

    expect(result.current[0]).toBe(false);

    hookAct(() => {
      toggle({});
    });

    expect(result.current[0]).toBe(true);
  });
});
