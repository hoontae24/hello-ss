import { GetServerSideProps, NextPage } from "next";

import MainTabView from "@/components/views/MainTabView";
import { getMainTabByQueryValue, MainTab } from "@/consts/main-tab";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";
import { useRelayStore } from "@/hooks/relay-store";

interface PageProps {
  mainTab: MainTab;
}

const API_URL =
  "https://gist.githubusercontent.com/styleshare-frontend/18089356186790c942c75e6dd5f90b90/raw/40517fc4a027233a03c6b220a2b069e1be7c7c39/goods-response-1.json";
const API_URL2 =
  "https://gist.githubusercontent.com/styleshare-frontend/1cd2be4351cd7efe64aab3d015f2bf27/raw/7bf95b3d4833a52cdb8fa78efe8b28f278891e30/goods-response-date-1.json";

const Page: NextPage<PageProps> = (props) => {
  const { mainTab } = props;

  const { data, sprint, depleted } = useRelayStore({
    initialFetchUrl: API_URL2,
    fetcher: async (url: string) => {
      const res = await window.fetch(url);
      return res.json() as Promise<{
        data: { id: string }[];
        paging?: { next?: string };
      }>;
    },
    next: (data) => data?.paging?.next ?? null,
  });

  const flattenData = data?.flatMap((data) => data.data);

  console.log(flattenData);

  return (
    <>
      <header>
        <MainTabView mainTab={mainTab} />
        <div>{flattenData?.length}</div>
        <div>depleted: {String(depleted)}</div>
        <button onClick={sprint}>GOGO</button>
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
