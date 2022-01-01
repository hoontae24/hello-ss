import { memo, VFC } from "react";

import { classes, HasClassName, HasStyle } from "@/libs/styles";

import _cls from "./styles.module.scss";

export interface SkeletonBoxProps extends HasClassName, HasStyle {}

const _SkeletonBox: VFC<SkeletonBoxProps> = (props) => {
  const cls = classes(_cls, props);
  return <div className={cls.root} style={props.style} />;
};

const SkeletonBox: VFC<SkeletonBoxProps> = memo(_SkeletonBox);

export default SkeletonBox;
