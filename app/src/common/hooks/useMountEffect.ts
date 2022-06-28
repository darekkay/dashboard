import { useEffect, type EffectCallback } from "react";

/**
 * React hook to run a callback only on first render (on mount).
 */
// eslint-disable-next-line react-hooks/exhaustive-deps
const useMountEffect = (callback: EffectCallback) => useEffect(callback, []);

export default useMountEffect;
