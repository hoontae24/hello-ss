import { useRouter } from "next/router";

import { defaultMainTab, isValidMainTab, MainTab } from "@/consts/main-tab";

export const useMainTabQuery = (): MainTab => {
  const mainTab = useRouter().query["main-tab"];

  if (!isValidMainTab(mainTab)) return defaultMainTab;
  return mainTab;
};
