import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import MainTabTemplate from "@/components/templates/MainTabTemplate";
import {
  getMainTabByQueryValue,
  getMainTabQueryValue,
  MainTab,
} from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";

interface PageProps {
  mainTab: MainTab;
}

const Page: NextPage<PageProps> = (props) => {
  const router = useRouter();
  const { mainTab } = props;

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

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  const mainTabQueryValue = ctx.query[getQueryParamKey(QueryParam.MAIN_TAB)];
  const mainTab = getMainTabByQueryValue(mainTabQueryValue);

  return {
    props: {
      mainTab: mainTab,
    },
  };
};
