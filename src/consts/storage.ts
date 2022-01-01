import { ValueOf } from "@/typings/utils";

export const WebStorageKey = {
  LIKED_GOODS_IDS: "LIKED_GOODS_IDS",
} as const;
export type WebStorageKey = ValueOf<typeof WebStorageKey>;

export type WebStorageValueType = {
  [WebStorageKey.LIKED_GOODS_IDS]: number[];
};
export type GetWebStorageValueType<K extends WebStorageKey> =
  WebStorageValueType[K];

export type WebStorageValueValidator<K extends WebStorageKey> = (
  value: unknown
) => value is GetWebStorageValueType<K>;
export const webStorageValueValidatorMap: {
  [Key in WebStorageKey]: WebStorageValueValidator<Key>;
} = {
  [WebStorageKey.LIKED_GOODS_IDS]: (value: unknown): value is number[] =>
    Array.isArray(value) && value.every((v) => typeof v === "number"),
};
export const getWebStorageValueValidator = <K extends WebStorageKey>(
  key: K
): WebStorageValueValidator<K> => {
  return webStorageValueValidatorMap[key] as WebStorageValueValidator<
    typeof key
  >;
};
