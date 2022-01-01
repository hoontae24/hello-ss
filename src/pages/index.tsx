import { GetServerSideProps, NextPage } from "next";

import GoodsView from "@/components/views/GoodsView";
import MainTabView from "@/components/views/MainTabView";
import { Badge, getBadgesByQueryValue } from "@/consts/badge";
import {
  getMainTabByQueryValue,
  getMainTabInitialFetchUrl,
  getMainTabReviewSectionFetchUrl,
  isMainTabFilterDisabled,
  MainTab,
} from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";

interface PageProps {
  mainTab: MainTab;
  filters: Badge[];
}

const Page: NextPage<PageProps> = (props) => {
  const { mainTab, filters } = props;

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
        <GoodsView
          initialFetchUrl={getMainTabInitialFetchUrl(mainTab)}
          disableFilter={isMainTabFilterDisabled(mainTab)}
          filters={filters}
          reviewSectionFetchUrl={getMainTabReviewSectionFetchUrl(mainTab)}
        />
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
  const badgesQueryValue = ctx.query[getQueryParamKey(QueryParam.BADGE_FILTER)];
  const badges = getBadgesByQueryValue(badgesQueryValue);

  return {
    props: {
      mainTab: mainTab,
      filters: badges,
    },
  };
};
