import { Dispatch, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { tuple } from "../../utils/tuple";

export interface HistoryProp<T = never> {
    item: string;
    type: string;
    value?: T;
}

export type HistoryPropSetter<T> = Dispatch<HistoryProp<T>>;

export const useRecentHistory = <T = never>(key: string, total: number) => {
  const [history, setHistory] = useLocalStorage<HistoryProp<T>[]>(
    `HISTORY_${key}_2`,
    [],
  );
  const push = useCallback(
    (item: HistoryProp<T>) => {
      setHistory(old => {
        const newOld = old.filter(
          obj => !(obj.item === item.item && obj.type === item.type),
        );

        return [item, ...newOld].slice(0, total);
      });
    },
    [total, setHistory],
  );
  return tuple(history, push);
};
