export const pluck = <T extends {}, K extends keyof T>(
  obj: T[],
  key: K,
): T[K][] => obj.map(element => element[key]);
