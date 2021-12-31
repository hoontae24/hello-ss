import { memo, VFC } from "react";

import { classes, HasClassName } from "@/libs/styles";
import { Goods } from "@/typings/domains/goods";

import Picture from "./Picture";
import Title from "./Title";
import PriceTag from "./PriceTag";
import Badges from "./Badges";
import Reaction from "./Reaction";
import _cls from "./styles.module.scss";

export interface GoodsListItemProps extends HasClassName {
  item: Goods;
}

const _GoodsListItem: VFC<GoodsListItemProps> = (props) => {
  const { item } = props;
  const cls = classes(_cls, props);

  return (
    <li className={cls.root}>
      <Picture pictureId={item.picture.id} />
      <Title brandName={item.brand.name} goodsName={item.name} />
      <PriceTag
        isDiscounted={item.isDiscounted}
        discountRate={item.discountRate}
        price={item.price}
      />
      <Badges badges={item.badges} />
      <Reaction likeCount={item.likeCount} reviewsCount={item.reviewsCount} />
    </li>
  );
};

const GoodsListItem: VFC<GoodsListItemProps> = memo(_GoodsListItem);

export default GoodsListItem;
