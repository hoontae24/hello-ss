import { memo, VFC } from "react";

import GoodsListItemSkeleton from "@/components/parts/GoodsListItem/Skeleton";

import cls from "./styles.module.scss";

export interface SkeletonsProps {
  count?: number;
}

const _Skeletons: VFC<SkeletonsProps> = (props) => {
  const { count = 30 } = props;

  const dummies = Array(count).fill(1);

  return (
    <>
      {dummies.map((n, i) => (
        <GoodsListItemSkeleton key={i} className={cls.listItem} />
      ))}
    </>
  );
};

const Skeletons: VFC<SkeletonsProps> = memo(_Skeletons);

export default Skeletons;
