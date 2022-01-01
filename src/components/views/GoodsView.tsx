import { memo, VFC } from "react";

import GoodsTemplate from "@/components/templates/GoodsTemplate";
import { Badge } from "@/consts/badge";
import { useGoodsListStore } from "@/hooks/goods-list-store";
import { useGoodsFilterStates } from "@/hooks/goods-filter-state";

export interface GoodsViewProps {
  initialFetchUrl: string;
  disableFilter: boolean;
  filters: Badge[];
}

const _GoodsView: VFC<GoodsViewProps> = (props) => {
  const { initialFetchUrl, disableFilter, filters } = props;

  const filterStates = useGoodsFilterStates({ filters });
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
