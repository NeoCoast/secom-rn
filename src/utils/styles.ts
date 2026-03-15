type StyleConditionMap = Record<PropertyKey, boolean>;
type StyleArg<T> = T | false | null | undefined | StyleConditionMap;

export const cx = <T>(...styles: StyleArg<T>[]): T[] =>
  styles.flatMap((style): T[] => {
    if (!style) return [];

    if (typeof style === "object") {
      const entries = Object.entries(style as StyleConditionMap);

      if (entries.every(([, value]) => typeof value === "boolean")) {
        return entries
          .filter(([, value]) => value)
          .map(([key]) => Number(key) as unknown as T);
      }
    }

    return [style as T];
  });
