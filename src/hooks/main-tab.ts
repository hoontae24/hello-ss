import { useRouter } from "next/router";

import {
  defaultMainTab,
  getMainTabByQueryValue,
  MainTab,
} from "@/consts/main-tab";

export const useMainTabQuery = (): MainTab => {
  const mainTab = useRouter().query["main-tab"];
  if (typeof mainTab === "string") {
    return getMainTabByQueryValue(mainTab);
  }
  return defaultMainTab;
};
