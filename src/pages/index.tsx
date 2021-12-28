import { useRouter } from "next/router";

import MainTabTemplate from "@/components/templates/MainTabTemplate";
import { getMainTabQueryValue } from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";
import { useMainTabQuery } from "@/hooks/main-tab";

const Page = () => {
  const router = useRouter();
  const mainTab = useMainTabQuery();

  return (
    <>
      <header>
        <MainTabTemplate
          tab={mainTab}
          onTabChange={(tab) => {
            router.push(
              `?${getQueryParamKey(QueryParam.MAIN_TAB)}=${getMainTabQueryValue(
                tab
              )}`
            );
          }}
        />
      </header>
      <hr />
    </>
  );
};

export default Page;
