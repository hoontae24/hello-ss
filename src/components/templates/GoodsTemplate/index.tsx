import { memo, VFC } from "react";

import { Goods } from "@/typings/domains/goods";

import GoodsList from "./GoodsList";
import GoodsListItem from "./GoodsListItem";

export interface GoodsTemplateProps {
  data: Goods[] | undefined;
}

const _GoodsTemplate: VFC<GoodsTemplateProps> = (props) => {
  const { data } = props;
  return (
    <GoodsList>
      {data?.map((goods, i) => (
        <GoodsListItem key={i} item={goods} />
      ))}
    </GoodsList>
  );
};

const GoodsTemplate: VFC<GoodsTemplateProps> = memo(_GoodsTemplate);

export default GoodsTemplate;
