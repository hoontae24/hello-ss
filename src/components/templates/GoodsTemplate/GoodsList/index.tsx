import { FC, memo } from "react";

import cls from "./styles.module.scss";

export interface GoodsListProps {}

const _GoodsList: FC<GoodsListProps> = (props) => {
  const { children } = props;

  return <ul className={cls.root}>{children}</ul>;
};

const GoodsList: FC<GoodsListProps> = memo(_GoodsList);

export default GoodsList;
