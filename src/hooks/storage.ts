import { useCallback, useMemo } from "react";

import {
  getWebStorageValueValidator,
  WebStorageKey,
  GetWebStorageValueType,
} from "@/consts/storage";

export interface WebStorageStoreDeps {
  /**
   * localStorage or sessionStorage
   *
   * default is `localStorage`
   */
  storage?: Storage;
}

export interface WebStorageStore {
  getItem: <K extends WebStorageKey>(
    key: K
  ) => GetWebStorageValueType<K> | null;
  setItem: <K extends WebStorageKey>(
    key: K,
    value: GetWebStorageValueType<K>
  ) => void;
}

export const useWebStorage = (deps?: WebStorageStoreDeps): WebStorageStore => {
  const defaultStorage =
    typeof localStorage !== "undefined"
      ? localStorage
      : { getItem: () => null, setItem: () => null };
  const { storage = defaultStorage } = deps || {};

  const getItem = useCallback(function <K extends WebStorageKey>(
    key: K
  ): GetWebStorageValueType<K> | null {
    try {
      const data = storage.getItem(key);
      const item = data === null ? null : JSON.parse(data);
      const validator = getWebStorageValueValidator(key);
      if (!validator) return null;
      if (!validator(item)) return null;
      return item;
    } catch (e) {
      return null;
    }
  },
  []);

  const setItem = useCallback(function <K extends WebStorageKey>(
    key: K,
    value: GetWebStorageValueType<K>
  ) {
    try {
      const validator = getWebStorageValueValidator(key);
      if (!validator) return;
      const isValid = validator(value);
      if (!isValid) return;
      const data = JSON.stringify(value);
      storage.setItem(key, data);
    } catch (e) {}
  },
  []);

  const store = useMemo(() => ({ getItem, setItem }), [getItem, setItem]);
  return store;
};
