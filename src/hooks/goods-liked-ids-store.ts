import { useCallback, useEffect, useMemo, useRef } from "react";

import { WebStorageKey } from "@/consts/storage";
import { useWebStorage } from "@/hooks/storage";
import { useForceUpdate } from "@/hooks/utils/life-cycles";

export interface GoodsLikedStore {
  isLiked: (id: number) => boolean;
  toggle: (id: number) => void;
  add: (id: number) => void;
  remove: (id: number) => void;
}

/** 사용자 인증 등의 좋아요 검증 로직을 구현할 수 없으므로 사용자의 좋아요 정보를 `localStorage`에 저장함 */
export const useGoodsLikedIdStore = (): GoodsLikedStore => {
  const key = WebStorageKey.LIKED_GOODS_IDS;
  const storage = useWebStorage();

  const { updated, forceUpdate } = useForceUpdate();
  const set = useRef(new Set(storage.getItem(key)));

  const isLiked = useCallback((id: number) => set.current.has(id), [updated]);
  const add = useCallback(
    (id: number) => {
      set.current.add(id);
      forceUpdate();
    },
    [forceUpdate]
  );
  const remove = useCallback(
    (id: number) => {
      set.current.delete(id);
      forceUpdate();
    },
    [forceUpdate]
  );
  const toggle = useCallback(
    (id: number) => (set.current.has(id) ? add(id) : remove(id)),
    [add, remove]
  );

  useEffect(() => {
    storage.setItem(key, Array.from(set.current));
  }, [updated]);

  const store: GoodsLikedStore = { isLiked, toggle, add, remove };

  return useMemo(() => store, Object.values(store));
};
