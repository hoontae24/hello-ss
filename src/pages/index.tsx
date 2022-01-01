import { GetServerSideProps, NextPage } from "next";

import GoodsView from "@/components/views/GoodsView";
import MainTabView from "@/components/views/MainTabView";
import {
  getMainTabByQueryValue,
  getMainTabInitialFetchUrl,
  MainTab,
} from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";

interface PageProps {
  mainTab: MainTab;
}

const Page: NextPage<PageProps> = (props) => {
  const { mainTab } = props;

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <MainTabView currentMainTab={mainTab} />
      </header>
      <section>
        <GoodsView initialFetchUrl={getMainTabInitialFetchUrl(mainTab)} />
      </section>
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
