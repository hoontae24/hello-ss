import { memo, useCallback, useState, VFC } from "react";

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
  const { data, loadMore } = useGoodsListStore({ initialFetchUrl, filters });

  const [likedIdSet, setLikedIdSet] = useState(new Set<number>());

  const isLiked = useCallback((id: number) => likedIdSet.has(id), [likedIdSet]);

  const handleLikedChange = useCallback((id: number, liked: boolean) => {
    setLikedIdSet((prev) => {
      if (liked) prev.add(id);
      else prev.delete(id);
      return new Set(prev);
    });
  }, []);

  return (
    <GoodsTemplate
      data={data}
      disableFilter={disableFilter}
      filterStates={filterStates}
      isLiked={isLiked}
      onLikedChange={handleLikedChange}
      onBottomIntersect={loadMore}
    />
  );
};

const GoodsView: VFC<GoodsViewProps> = memo(_GoodsView);

export default GoodsView;
