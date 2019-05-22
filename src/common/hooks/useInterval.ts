import { useEffect, useRef } from "react";

/* Based on: https://overreacted.io/making-setinterval-declarative-with-react-hooks/ */
const useInterval = (callback: Function, delay: number | null) => {
  const savedCallback = useRef() as { current: Function };

  // remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback, savedCallback]);

  // set up the interval
  useEffect(() => {
    const tick = () => savedCallback.current();

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, savedCallback]);
};

export default useInterval;
