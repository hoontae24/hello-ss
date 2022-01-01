import { memo, useCallback, VFC } from "react";

import GoodsTemplate from "@/components/templates/GoodsTemplate";
import { Badge } from "@/consts/badge";
import { useGoodsLikedIdStore } from "@/hooks/goods-liked-ids-store";
import { useGoodsListStore } from "@/hooks/goods-list-store";
import { useGoodsFilterStates } from "@/hooks/goods-filter-state";
import { useReviewSectionStore } from "@/hooks/review-section-store";

export interface GoodsViewProps {
  initialFetchUrl: string;
  disableFilter: boolean;
  filters: Badge[];
  reviewSectionFetchUrl: string | null;
}

const _GoodsView: VFC<GoodsViewProps> = (props) => {
  const { initialFetchUrl, disableFilter, filters, reviewSectionFetchUrl } =
    props;

  const filterStates = useGoodsFilterStates({ filters });
  const { data, loadMore } = useGoodsListStore({ initialFetchUrl, filters });
  const likedStore = useGoodsLikedIdStore();
  const reviewSectionStore = useReviewSectionStore({
    fetchUrl: reviewSectionFetchUrl,
  });

  const handleLikedChange = useCallback(
    (id: number, liked: boolean) => {
      if (liked) likedStore.add(id);
      else likedStore.remove(id);
    },
    [likedStore.add, likedStore.remove]
  );

  return (
    <GoodsTemplate
      data={data}
      reviewSection={reviewSectionStore.reviewSection}
      disableFilter={disableFilter}
      filterStates={filterStates}
      isLiked={likedStore.isLiked}
      onLikedChange={handleLikedChange}
      onBottomIntersect={loadMore}
    />
  );
};

const GoodsView: VFC<GoodsViewProps> = memo(_GoodsView);

export default GoodsView;
