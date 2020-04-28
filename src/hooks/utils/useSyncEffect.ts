import { DependencyList, useRef, EffectCallback } from "react";
import shallowEqual from "shallowequal";

type OptionalDeps = DependencyList | undefined;
type CompareFn = (old: OptionalDeps, current: OptionalDeps) => boolean;

const useShouldUpdate = (deps: OptionalDeps, compare: CompareFn) => {
  const previousDepsRef = useRef<DependencyList>();
  const previousDeps = previousDepsRef.current;
  previousDepsRef.current = deps;

  if (previousDeps == null && deps == null) {
    return true;
  }

  return !compare(previousDeps, deps);
};

const useSyncEffectWithCompare = (
  fn: EffectCallback,
  deps: OptionalDeps,
  compare: CompareFn,
) => {
  const previousClose = useRef<ReturnType<EffectCallback>>();
  const shouldUpdate = useShouldUpdate(deps, compare);

  if (shouldUpdate) {
    if (previousClose.current) {
      previousClose.current();
    }

    previousClose.current = fn();
  }
};

export const useSyncEffect = (fn: EffectCallback, deps?: DependencyList) => 
  useSyncEffectWithCompare(fn, deps, shallowEqual);
