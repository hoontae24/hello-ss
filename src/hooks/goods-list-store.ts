import { useMemo } from "react";

import { Badge } from "@/consts/badge";
import { useRelayStore } from "@/hooks/relay-store";
import { Goods } from "@/typings/domains/goods";

export interface GoodsListStoreDeps {
  initialFetchUrl: string;
  filters?: Badge[];
}

export interface GoodsListStore {
  loading: boolean;
  data: Goods[] | undefined;
  loadMore: () => Promise<void>;
}

export const useGoodsListStore = (deps: GoodsListStoreDeps): GoodsListStore => {
  const { initialFetchUrl, filters } = deps;

  const { data, sprint } = useRelayStore({
    initialFetchUrl: initialFetchUrl,
    fetcher,
    next,
  });

  const goodsList = data?.flatMap((data) => data.data);
  const filteredGoods =
    filters && filters.length
      ? goodsList?.filter((goods) =>
          filters.some((badge) => goods.badges.includes(badge))
        )
      : goodsList;

  const store: GoodsListStore = {
    loading: data === undefined,
    data: filteredGoods,
    loadMore: sprint,
  };

  return useMemo(() => store, Object.values(store));
};

export interface GoodsFetchData {
  data: Goods[];
  paging?: { next?: string };
}

const fetcher = async (url: string): Promise<GoodsFetchData> => {
  return window.fetch(url).then((res) => res.json());
};

const next = (data: GoodsFetchData) => {
  return data.paging?.next ?? null;
};
