import { Fragment, memo, useMemo, VFC } from "react";

import IntersectionBox from "@/components/atoms/IntersectionBox";
import GoodsFilter from "@/components/parts/GoodsFilter";
import GoodsList from "@/components/parts/GoodsList";
import GoodsListItem from "@/components/parts/GoodsListItem";
import ReviewSectionTemplate from "@/components/templates/ReviewSection";
import { Goods, GoodsFilterState } from "@/typings/domains/goods";
import { ReviewSection } from "@/typings/domains/review-section";

import Skeletons from "./Skeletons";
import Facllback from "./Fallback";
import cls from "./styles.module.scss";

export interface GoodsTemplateProps {
  loading: boolean;
  data: Goods[] | undefined;
  reviewSection: ReviewSection | null | undefined;
  disableFilter: boolean;
  filterStates: GoodsFilterState[];
  isLiked: (id: number) => boolean;
  onLikedChange: (id: number, liked: boolean) => void;
  onBottomIntersect?: () => void;
}

const _GoodsTemplate: VFC<GoodsTemplateProps> = (props) => {
  const {
    loading,
    data,
    reviewSection,
    disableFilter,
    filterStates,
    isLiked,
    onLikedChange,
    onBottomIntersect,
  } = props;

  const handleBottomIntersect = useMemo(() => {
    if (!onBottomIntersect) return;
    return (intersected: boolean) => {
      if (typeof window === "undefined") return;
      if (window.scrollY === 0) return;
      if (intersected) onBottomIntersect();
    };
  }, [onBottomIntersect]);

  return (
    <div className={cls.root}>
      {disableFilter && (
        <GoodsFilter className={cls.filter} states={filterStates} />
      )}
      <GoodsList className={cls.list}>
        {loading && <Skeletons />}
        {!loading && data?.length === 0 && <Facllback />}
        {!loading &&
          data?.map((goods, i) => (
            <Fragment key={i}>
              <GoodsListItem
                className={cls.listItem}
                item={goods}
                liked={isLiked(goods.id)}
                onLikedChange={onLikedChange}
              />
              {reviewSection && reviewSection.position === i + 1 && (
                <ReviewSectionTemplate
                  className={cls.reviewSection}
                  data={reviewSection}
                />
              )}
            </Fragment>
          ))}
      </GoodsList>
      {handleBottomIntersect && (
        <IntersectionBox
          onIntersect={handleBottomIntersect}
          intersectOptions={{ rootMargin: "500px" }}
        />
      )}
    </div>
  );
};

const GoodsTemplate: VFC<GoodsTemplateProps> = memo(_GoodsTemplate);

export default GoodsTemplate;
