import clsx from "clsx";
import { CSSProperties } from "react";

export interface HasClassName {
  className?: string;
}

export interface HasClasses<K extends string | number> {
  classes?: Partial<Record<K, string>>;
}

export interface HasStyle {
  style?: CSSProperties;
}

export const mergeClasses = <K extends string | number>(
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

export const classes = <K extends string | number>(
  cls: Record<K | "root", string>,
  props: HasClassName & HasClasses<K | "root">
) => {
  const { className, classes } = props;
  return mergeClasses<K | "root">(cls, classes, { root: className } as Record<
    K | "root",
    string
  >);
};
