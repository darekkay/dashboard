import { useCallback, useState } from "react";

/**
 * React hook for boolean state values, providing a better API.
 *
 * Example usage:
 *   const [isModalOpen, openModal, closeModal] = useBooleanState(false);
 */
const useBooleanState = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);

  return [state, setTrue, setFalse, setState] as const;
};

export default useBooleanState;
