import { memo, useCallback, useState, VFC } from "react";

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
  liked: boolean;
  onLikedChange: (id: number, liked: boolean) => void;
}

const _GoodsListItem: VFC<GoodsListItemProps> = (props) => {
  const { item, liked, onLikedChange } = props;
  const cls = classes(_cls, props);

  const [likeCount, setLikeCount] = useState(item.likeCount);

  const handleLikedChange = useCallback(() => {
    const nextLiked = !liked;
    setLikeCount((prev) => prev + (nextLiked ? 1 : -1));
    onLikedChange(item.id, nextLiked);
  }, [item, liked, onLikedChange]);

  return (
    <li className={cls.root}>
      <Picture
        pictureId={item.picture.id}
        liked={liked}
        onLikeClick={handleLikedChange}
      />
      <Title brandName={item.brand.name} goodsName={item.name} />
      <PriceTag
        isDiscounted={item.isDiscounted}
        discountRate={item.discountRate}
        price={item.price}
      />
      <Badges badges={item.badges} />
      <Reaction likeCount={likeCount} reviewsCount={item.reviewsCount} />
    </li>
  );
};

const GoodsListItem: VFC<GoodsListItemProps> = memo(_GoodsListItem);

export default GoodsListItem;
