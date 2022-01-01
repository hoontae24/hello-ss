import Link from "next/link";
import { memo, useCallback, VFC } from "react";

import { classes, HasClassName } from "@/libs/styles";
import { Goods } from "@/typings/domains/goods";

import Picture from "./Picture";
import Title from "./Title";
import PriceTag from "./PriceTag";
import Badges from "./Badges";
import Reaction from "./Reaction";
import _cls from "./styles.module.scss";
import { getGoodsTitle } from "@/libs/goods";

export interface GoodsListItemProps extends HasClassName {
  item: Goods;
  liked: boolean;
  onLikedChange: (id: number, liked: boolean) => void;
}

const _GoodsListItem: VFC<GoodsListItemProps> = (props) => {
  const { item, liked, onLikedChange } = props;
  const cls = classes(_cls, props);

  const title = getGoodsTitle(item);

  const handleLikedChange = useCallback(() => {
    onLikedChange(item.id, !liked);
  }, [item, liked, onLikedChange]);

  return (
    <li className={cls.root}>
      <Link href={`#${item.id}`} passHref>
        <a>
          <Picture
            title={title}
            pictureId={item.picture.id}
            liked={liked}
            onLikeClick={handleLikedChange}
          />
          <Title
            brandName={item.brand.name}
            goodsName={item.name}
            title={title}
          />
          <PriceTag
            isDiscounted={item.isDiscounted}
            discountRate={item.discountRate}
            price={item.price}
          />
          <Badges badges={item.badges} />
          <Reaction
            likeCount={item.likeCount + (liked ? 1 : 0)}
            reviewsCount={item.reviewsCount}
          />
        </a>
      </Link>
    </li>
  );
};

const GoodsListItem: VFC<GoodsListItemProps> = memo(_GoodsListItem);

export default GoodsListItem;
