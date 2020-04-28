import { useCallback } from "react";

export const useCurriedFn = <Arg, Rest extends any[], Return>(
  fn: (arg: Arg, ...rest: Rest) => Return,
  curried: Arg,
) => useCallback((...rest: Rest) => fn(curried, ...rest), [fn, curried]);
