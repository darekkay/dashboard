import { hookAct, renderHook } from "common/testing";

import useBooleanState from "../useBooleanState";

const getResult = (result: any) => {
  const [value, setValueTrue, setValueFalse, setValue] = result.current;
  return { value, setValueTrue, setValueFalse, setValue };
};

describe("useBooleanState", () => {
  test("uses false by default", () => {
    const { result } = renderHook(
      (initialState: boolean) => useBooleanState(initialState),
      {}
    );

    expect(getResult(result).value).toBe(false);
  });

  test("changes and returns the current value correctly", () => {
    const { result } = renderHook(
      (initialState: boolean) => useBooleanState(initialState),
      { initialProps: true }
    );

    expect(getResult(result).value).toBe(true);

    hookAct(() => {
      getResult(result).setValue(false);
    });
    expect(getResult(result).value).toBe(false);

    hookAct(() => {
      getResult(result).setValue(true);
    });
    expect(getResult(result).value).toBe(true);

    hookAct(() => {
      getResult(result).setValueFalse();
    });
    expect(getResult(result).value).toBe(false);

    hookAct(() => {
      getResult(result).setValueTrue();
    });
    expect(getResult(result).value).toBe(true);
  });
});
