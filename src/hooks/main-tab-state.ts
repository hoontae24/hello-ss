import { useCallback, useMemo } from "react";

import { allMainTabs, getMainTabQueryValue, MainTab } from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";
import { TabState } from "@/typings/domains/tab-state";

export interface MainTabStateDeps {
  current: MainTab;
}

export interface MainTabState {
  tabStates: TabState[];
}

export const useMainTabState = (deps: MainTabStateDeps): MainTabState => {
  const { current } = deps;

  const toHref = useCallback((tab: MainTab) => {
    const key = getQueryParamKey(QueryParam.MAIN_TAB);
    const value = getMainTabQueryValue(tab);
    const url = `?${key}=${value}`;
    return url;
  }, []);

  const tabStates = useMemo(() => {
    return allMainTabs.map((tab) => ({
      value: tab,
      selected: tab === current,
      href: toHref(tab),
    }));
  }, [current, toHref]);

  const state: MainTabState = {
    tabStates,
  };

  return useMemo(() => state, Object.values(state));
};
