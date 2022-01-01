import { GetServerSideProps, NextPage } from "next";

import GoodsTemplate from "@/components/templates/GoodsTemplate";
import MainTabView from "@/components/views/MainTabView";
import {
  getMainTabByQueryValue,
  getMainTabInitialFetchUrl,
  MainTab,
} from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";
import { useGoodsListStore } from "@/hooks/goods-list-store";

interface PageProps {
  mainTab: MainTab;
}

const Page: NextPage<PageProps> = (props) => {
  const { mainTab } = props;

  const { data, loadMore } = useGoodsListStore({
    initialFetchUrl: getMainTabInitialFetchUrl(mainTab),
  });

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
        <GoodsTemplate data={data} onBottomIntersect={loadMore} />
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
