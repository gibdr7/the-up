import { useRef } from "react";

export const useLatestRef = <T>(val: T) => {
  const ref = useRef(val);
  ref.current = val;

  return ref;
};

export const useLatestObject = <T extends {}>(obj: T): T => {
  const ref = useRef({});

  return Object.assign(ref.current, obj);
};
