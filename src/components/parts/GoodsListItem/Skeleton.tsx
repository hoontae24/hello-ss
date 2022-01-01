import { memo, VFC } from "react";

import SkeletonBox from "@/components/atoms/SkeletonBox";
import { classes, HasClassName } from "@/libs/styles";

import _cls from "./styles.module.scss";

export interface GoodsListItemSkeletonProps extends HasClassName {}

const _GoodsListItemSkeleton: VFC<GoodsListItemSkeletonProps> = (props) => {
  const cls = classes(_cls, props);

  return (
    <li className={cls.root}>
      <div className={cls.picture}>
        <div className={cls.pictureFrame}></div>
      </div>
      <SkeletonBox style={{ height: "1em", marginBottom: 4 }} />
      <SkeletonBox style={{ height: "1em", marginBottom: 4 }} />
      <SkeletonBox style={{ width: "60%", height: "1em", marginBottom: 4 }} />
      <SkeletonBox
        style={{
          display: "inline-block",
          width: "25%",
          height: "1em",
          marginRight: 4,
          marginBottom: 4,
        }}
      />
      <SkeletonBox
        style={{
          display: "inline-block",
          width: "25%",
          height: "1em",
          marginBottom: 4,
        }}
      />
    </li>
  );
};

const GoodsListItemSkeleton: VFC<GoodsListItemSkeletonProps> = memo(
  _GoodsListItemSkeleton
);

export default GoodsListItemSkeleton;
