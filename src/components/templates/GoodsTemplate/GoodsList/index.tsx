import { classes, HasClassName } from "@/libs/styles";
import { FC, memo } from "react";

import _cls from "./styles.module.scss";

export interface GoodsListProps extends HasClassName {}

const _GoodsList: FC<GoodsListProps> = (props) => {
  const { children } = props;
  const cls = classes(_cls, props);

  return <ul className={cls.root}>{children}</ul>;
};

const GoodsList: FC<GoodsListProps> = memo(_GoodsList);

export default GoodsList;
