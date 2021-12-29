import { useRouter } from "next/router";
import { memo, useCallback, VFC } from "react";

import MainTabTemplate from "@/components/templates/MainTabTemplate";
import { getMainTabQueryValue, MainTab } from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";

export interface MainTabViewProps {
  mainTab: MainTab;
}

const _MainTabView: VFC<MainTabViewProps> = (props) => {
  const router = useRouter();
  const { mainTab } = props;

  const handleTabChange = useCallback(
    (tab: MainTab) => {
      const key = getQueryParamKey(QueryParam.MAIN_TAB);
      const value = getMainTabQueryValue(tab);
      const url = `?${key}=${value}`;
      router.push(url);
    },
    [router]
  );

  return <MainTabTemplate tab={mainTab} onTabChange={handleTabChange} />;
};

const MainTabView: VFC<MainTabViewProps> = memo(_MainTabView);

export default MainTabView;
