import { GetServerSideProps, NextPage } from "next";

import MainTabView from "@/components/views/MainTabView";
import { getMainTabByQueryValue, MainTab } from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";

interface PageProps {
  mainTab: MainTab;
}

const Page: NextPage<PageProps> = (props) => {
  const { mainTab } = props;

  return (
    <>
      <header>
        <MainTabView mainTab={mainTab} />
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
