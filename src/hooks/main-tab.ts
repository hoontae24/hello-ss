import { useRouter } from "next/router";

import {
  defaultMainTab,
  getMainTabByQueryValue,
  MainTab,
} from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";

export const useMainTabQuery = (): MainTab => {
  const mainTab = useRouter().query[getQueryParamKey(QueryParam.MAIN_TAB)];
  if (typeof mainTab === "string") {
    return getMainTabByQueryValue(mainTab);
  }
  return defaultMainTab;
};
