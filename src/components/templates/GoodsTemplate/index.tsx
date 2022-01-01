import { memo, useMemo, VFC } from "react";

import IntersectionBox from "@/components/atoms/IntersectionBox";
import GoodsList from "@/components/parts/GoodsList";
import GoodsListItem from "@/components/parts/GoodsListItem";
import { Goods } from "@/typings/domains/goods";

import cls from "./styles.module.scss";

export interface GoodsTemplateProps {
  data: Goods[] | undefined;
  onBottomIntersect?: () => void;
}

const _GoodsTemplate: VFC<GoodsTemplateProps> = (props) => {
  const { data, onBottomIntersect } = props;

  const handleBottomIntersect = useMemo(() => {
    if (!onBottomIntersect) return;
    return (intersected: boolean) => {
      if (typeof window === "undefined") return;
      if (window.scrollY === 0) return;
      if (intersected) onBottomIntersect();
    };
  }, [onBottomIntersect]);

  return (
    <GoodsList className={cls.list}>
      {data?.map((goods, i) => (
        <GoodsListItem key={i} className={cls.listItem} item={goods} />
      ))}
      {handleBottomIntersect && (
        <IntersectionBox
          onIntersect={handleBottomIntersect}
          intersectOptions={{ rootMargin: "500px" }}
        />
      )}
    </GoodsList>
  );
};

const GoodsTemplate: VFC<GoodsTemplateProps> = memo(_GoodsTemplate);

export default GoodsTemplate;
