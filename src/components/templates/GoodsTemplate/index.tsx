import { memo, useMemo, VFC } from "react";

import IntersectionBox from "@/components/atoms/IntersectionBox";
import GoodsFilter from "@/components/parts/GoodsFilter";
import GoodsList from "@/components/parts/GoodsList";
import GoodsListItem from "@/components/parts/GoodsListItem";
import { Goods, GoodsFilterState } from "@/typings/domains/goods";

import cls from "./styles.module.scss";

export interface GoodsTemplateProps {
  data: Goods[] | undefined;
  disableFilter: boolean;
  filterStates: GoodsFilterState[];
  onBottomIntersect?: () => void;
}

const _GoodsTemplate: VFC<GoodsTemplateProps> = (props) => {
  const { data, disableFilter, filterStates, onBottomIntersect } = props;

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
        {data?.map((goods, i) => (
          <GoodsListItem key={i} className={cls.listItem} item={goods} />
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
