import { useMemo } from "react";

import { getMainTabInitialFetchUrl, MainTab } from "@/consts/main-tab";
import { useRelayStore } from "@/hooks/relay-store";
import { Goods } from "@/typings/domains/goods";
import env from "@/consts/env";

export interface GoodsListStoreDeps {
  mainTab: MainTab;
}

export interface GoodsListStore {
  data: Goods[] | undefined;
  loadMore: () => Promise<void>;
}

export const useGoodsListStore = (deps: GoodsListStoreDeps): GoodsListStore => {
  const { mainTab } = deps;

  const { data, sprint } = useRelayStore({
    initialFetchUrl: getMainTabInitialFetchUrl(mainTab),
    fetcher,
    next,
  });

  const goods = data?.flatMap((data) => data.data);

  const store: GoodsListStore = {
    data: goods,
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
