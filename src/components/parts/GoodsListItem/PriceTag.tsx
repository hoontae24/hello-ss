import { memo, VFC } from "react";

import { priceWithSuffix } from "@/libs/goods";

import cls from "./styles.module.scss";

export interface PriceTagProps {
  isDiscounted: boolean;
  discountRate: number;
  price: number;
}

const _PriceTag: VFC<PriceTagProps> = (props) => {
  const { isDiscounted, discountRate, price } = props;
  return (
    <div className={cls.priceTag}>
      {isDiscounted && <span className={cls.discount}>{discountRate}%</span>}
      <span>{priceWithSuffix(price)}</span>
    </div>
  );
};

const PriceTag: VFC<PriceTagProps> = memo(_PriceTag);

export default PriceTag;
