/* Based on https://github.com/streamich/react-use/blob/master/src/useToggle.ts */
import { useReducer, Reducer } from "react";

const toggleReducer = (state: boolean, nextValue?: any) =>
  typeof nextValue === "boolean" ? nextValue : !state;

/**
 * React hook to toggle a boolean value.
 *
 * Example usage:
 *   const [isMenuOpen, toggleMenuOpen] = useToggle(false);
 */
const useToggle = (
  initialValue: boolean
): [boolean, (nextValue?: any) => void] => {
  return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
};

export default useToggle;
