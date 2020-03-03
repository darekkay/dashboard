import { useCallback, useState } from "react";

const useBooleanState = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);

  return [state, setTrue, setFalse, setState] as const;
};

export default useBooleanState;
