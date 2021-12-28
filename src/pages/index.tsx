import { useRouter } from "next/router";

import MainTabTemplate from "@/components/templates/MainTabTemplate";
import { getMainTabQueryValue, MainTab } from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";
import { useMainTabQuery } from "@/hooks/main-tab";

const Page = () => {
  const router = useRouter();
  const mainTab = useMainTabQuery();

  const handleTabChange = (tab: MainTab) => {
    const key = getQueryParamKey(QueryParam.MAIN_TAB);
    const value = getMainTabQueryValue(tab);
    const url = `?${key}=${value}`;
    router.push(url);
  };

  return (
    <>
      <header>
        <MainTabTemplate tab={mainTab} onTabChange={handleTabChange} />
      </header>
    </>
  );
};

export default Page;
