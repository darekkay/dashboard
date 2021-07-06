import { useEffect, useRef } from "react";

/* Based on: https://overreacted.io/making-setinterval-declarative-with-react-hooks/ */
const useInterval = (callback: Function, delayInMs: number | null) => {
  const savedCallback = useRef<Function>(); // remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback, savedCallback]);

  // set up the interval
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const tick = () => (savedCallback.current ? savedCallback.current() : null);

    if (delayInMs !== null) {
      const id = setInterval(tick, delayInMs);
      return () => clearInterval(id);
    }
  }, [delayInMs, savedCallback]);
};

export default useInterval;
