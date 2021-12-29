import { useMemo } from "react";

import { MainTab } from "@/consts/main-tab";
import { useRelayStore } from "@/hooks/relay-store";
import { Goods } from "@/typings/domains/goods";

export interface GoodsListStoreDeps {
  mainTab: MainTab;
}

export interface GoodsListStore {
  data: Goods[] | undefined;
  loadMore: () => Promise<void>;
}

const API_URL =
  "https://gist.githubusercontent.com/styleshare-frontend/18089356186790c942c75e6dd5f90b90/raw/40517fc4a027233a03c6b220a2b069e1be7c7c39/goods-response-1.json";
const API_URL2 =
  "https://gist.githubusercontent.com/styleshare-frontend/1cd2be4351cd7efe64aab3d015f2bf27/raw/7bf95b3d4833a52cdb8fa78efe8b28f278891e30/goods-response-date-1.json";

export const useGoodsListStore = (deps: GoodsListStoreDeps): GoodsListStore => {
  const { mainTab } = deps;

  // TODO main-tab의 로직으로 옮기기(MainTabHelper)
  const initialFetchUrl = mainTab === "POPULARITY" ? API_URL : API_URL2;

  const { data, sprint } = useRelayStore({
    initialFetchUrl,
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
