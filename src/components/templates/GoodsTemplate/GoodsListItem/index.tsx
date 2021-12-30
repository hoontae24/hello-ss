import { memo, VFC } from "react";

import { Goods } from "@/typings/domains/goods";

import Picture from "./Picture";
import Title from "./Title";
import cls from "./styles.module.scss";

export interface GoodsListItemProps {
  item: Goods;
}

const _GoodsListItem: VFC<GoodsListItemProps> = (props) => {
  const { item } = props;

  return (
    <li className={cls.root}>
      <Picture pictureId={item.picture.id} />
      <Title brandName={item.brand.name} goodsName={item.name} />
    </li>
  );
};

const GoodsListItem: VFC<GoodsListItemProps> = memo(_GoodsListItem);

export default GoodsListItem;
