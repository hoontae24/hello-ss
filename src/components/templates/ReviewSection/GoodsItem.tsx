import Image from "next/image";
import Link from "next/link";
import { memo, VFC } from "react";

import Title from "@/components/parts/GoodsListItem/Title";
import PriceTag from "@/components/parts/GoodsListItem/PriceTag";
import { countWithSuffix, getPictureUrl } from "@/libs/goods";
import { GoodsWithReviews } from "@/typings/domains/goods";

import cls from "./styles.module.scss";

export interface GoodsItemProps {
  item: GoodsWithReviews;
}

const _GoodsItem: VFC<GoodsItemProps> = (props) => {
  const { item } = props;

  return (
    <li className={cls.item}>
      <Link href={`#${item.id}`}>
        <a>
          <div className={cls.paper}>
            <div className={cls.goods}>
              <div className={cls.picture}>
                <Image
                  alt=""
                  src={getPictureUrl(item.picture.id, 128)}
                  layout="fill"
                />
              </div>
              <div className={cls.description}>
                <Title
                  oneline
                  brandName={item.brand.name}
                  goodsName={item.name}
                />
                <PriceTag
                  isDiscounted={item.isDiscounted}
                  discountRate={item.discountRate}
                  price={item.price}
                />
              </div>
            </div>
            <div className={cls.reviews}>
              {item.reviews.map((review) => (
                <div key={review.id} className={cls.reviewItem}>
                  <div className={cls.frame} />
                  <Image
                    alt=""
                    src={getPictureUrl(review.picture.id, 128)}
                    layout="fill"
                  />
                </div>
              ))}
            </div>
            <span className={cls.reviewCount}>
              {item.reviewsCount > 0 && "+"}
              {countWithSuffix(item.reviewsCount)}
            </span>
          </div>
        </a>
      </Link>
    </li>
  );
};

const GoodsItem: VFC<GoodsItemProps> = memo(_GoodsItem);

export default GoodsItem;
