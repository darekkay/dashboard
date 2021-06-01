import { useEffect, useRef } from "react";

/* Based on: https://overreacted.io/making-setinterval-declarative-with-react-hooks/ */
const useInterval = (callback: Function, delay: number | null) => {
  const savedCallback = useRef<Function>(); // remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback, savedCallback]);

  // set up the interval
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const tick = () => (savedCallback.current ? savedCallback.current() : null);

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, savedCallback]);
};

export default useInterval;
