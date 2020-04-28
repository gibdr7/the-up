import { useRef } from "react";
import { useSyncEffect } from "./useSyncEffect";

export const useObjectMemo = <T extends object>(obj: T): T => {
  const ref = useRef(obj);
  const deps = [...Object.keys(obj), ...Object.values(obj)];

  useSyncEffect(() => {
    ref.current = obj;
  }, deps);
  return ref.current;
};
