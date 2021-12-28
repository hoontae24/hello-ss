import clsx from "clsx";

export interface HasClassName {
  className?: string;
}

export interface HasClasses<K extends string> {
  classes?: Partial<Record<K, string>>;
}

export const mergeClasses = <K extends string>(
  ...classesList: (Partial<Record<K, string>> | undefined)[]
): Partial<Record<K, string>> => {
  return classesList
    .filter((cls): cls is Partial<Record<K, string>> => Boolean(cls))
    .reduce((res, cls) => {
      for (const key in cls) {
        if (cls[key]) {
          res[key] = clsx(res[key], cls[key]);
        }
      }
      return res;
    }, {} as Partial<Record<K, string>>);
};

export const classes = <K extends string>(
  cls: Record<K | "root", string>,
  props: HasClassName & HasClasses<K | "root">
) => {
  const { className, classes } = props;
  return mergeClasses<K | "root">(cls, classes, { root: className } as Record<
    K | "root",
    string
  >);
};
