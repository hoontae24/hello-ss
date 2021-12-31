import { memo, VFC } from "react";

import GoodsList from "@/components/parts/GoodsList";
import GoodsListItem from "@/components/parts/GoodsListItem";
import { Goods } from "@/typings/domains/goods";

import cls from "./styles.module.scss";

export interface GoodsTemplateProps {
  data: Goods[] | undefined;
}

const _GoodsTemplate: VFC<GoodsTemplateProps> = (props) => {
  const { data } = props;
  return (
    <GoodsList className={cls.list}>
      {data?.map((goods, i) => (
        <GoodsListItem key={i} className={cls.listItem} item={goods} />
      ))}
    </GoodsList>
  );
};

const GoodsTemplate: VFC<GoodsTemplateProps> = memo(_GoodsTemplate);

export default GoodsTemplate;
