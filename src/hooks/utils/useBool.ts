import { useState, useCallback } from "react";
import { tuple } from "../../utils/tuple";


export const useBool = (defaultValue: boolean) => {
  const [state, setState] = useState(defaultValue);

  const enable = useCallback(() => setState(true), []);
  const disable = useCallback(() => setState(() => setState(false), []);

  return tuple(state, enable, disable)
};
