import { useState, useCallback, SetStateAction } from "react";
import { tuple } from "../../utils/tuple";

export const useLocalStorage = <T>(key: string, def: T) => {
  const [state, setState] = useState<T>(() => {
    const cached = localStorage.getItem(key);
    if (cached == null) {
      localStorage.setItem(key, JSON.stringify(def));
      return def;
    }
    return JSON.parse(cached);
  });
  const setLocalStorage = useCallback(
    (val: SetStateAction<T>) => {
      setState(old => {
        const resolved = val instanceof Function ? val(old) : val;
        localStorage.setItem(key, JSON.stringify(resolved));
        return resolved;
      });
    },
    [key],
  );
  return tuple(state, setLocalStorage);
};
