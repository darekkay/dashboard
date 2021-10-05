/* Based on https://usehooks.com/usePrevious/ */
import { useEffect, useRef } from "react";

/**
 * React hook to store and return a value from the last render cycle.
 */
const usePrevious = <T>(value: T): T | undefined => {
  // The ref object is a generic container whose current property is mutable
  // and can hold any value, similar to an instance property on a class
  const ref = useRef<T>();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};

export default usePrevious;
