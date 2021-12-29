import { GetServerSideProps, NextPage } from "next";

import MainTabView from "@/components/views/MainTabView";
import { getMainTabByQueryValue, MainTab } from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";
import { useGoodsListStore } from "@/hooks/goods-list-store";

interface PageProps {
  mainTab: MainTab;
}

const Page: NextPage<PageProps> = (props) => {
  const { mainTab } = props;

  const { data, loadMore } = useGoodsListStore({ mainTab });

  console.log(data);

  return (
    <>
      <header>
        <MainTabView mainTab={mainTab} />
        <div>{String(data?.length)}</div>
        <div>
          {data?.slice(0, 5).map((goods) => (
            <div key={goods.id}>{goods.id}</div>
          ))}
        </div>
        <button onClick={loadMore}>GOGO</button>
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
