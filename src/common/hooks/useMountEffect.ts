import { EffectCallback, useEffect } from "react";

/* Runs the callback only on first render (on mount) */
export const useMountEffect = (callback: EffectCallback) =>
  useEffect(callback, []);
