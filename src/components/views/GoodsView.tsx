import { useRouter } from "next/router";
import { memo, VFC } from "react";

import GoodsTemplate from "@/components/templates/GoodsTemplate";
import { allBadges, Badge } from "@/consts/badge";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";
import { useGoodsListStore } from "@/hooks/goods-list-store";

export interface GoodsViewProps {
  initialFetchUrl: string;
  disableFilter: boolean;
  filters: Badge[];
}

const _GoodsView: VFC<GoodsViewProps> = (props) => {
  const router = useRouter();
  const { initialFetchUrl, disableFilter, filters } = props;

  const query = router.query;
  const queryKey = getQueryParamKey(QueryParam.BADGE_FILTER);
  const filterStates = allBadges.map((badge) => {
    const selected = filters.includes(badge);
    return {
      value: badge,
      selected: selected,
      href: {
        pathname: router.pathname,
        query: {
          ...query,
          [queryKey]: selected
            ? filters.filter((v) => v !== badge)
            : filters.concat(badge),
        },
      },
    };
  });

  const { data, loadMore } = useGoodsListStore({ initialFetchUrl });

  return (
    <GoodsTemplate
      data={data}
      disableFilter={disableFilter}
      filterStates={filterStates}
      onBottomIntersect={loadMore}
    />
  );
};

const GoodsView: VFC<GoodsViewProps> = memo(_GoodsView);

export default GoodsView;
