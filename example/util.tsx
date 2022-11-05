type Values<T> = T[keyof T];

export type ObjectEntries<T> = Array<
  Values<{
    [key in keyof Required<T>]: [key, T[key]];
  }>
>;
