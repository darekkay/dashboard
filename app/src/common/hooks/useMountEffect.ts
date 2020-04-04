import { EffectCallback, useEffect } from "react";

/* Runs the callback only on first render (on mount) */
const useMountEffect = (callback: EffectCallback) => useEffect(callback, []);

export default useMountEffect;
