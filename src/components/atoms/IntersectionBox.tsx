import { FC, HTMLProps, memo, useRef } from "react";

import {
  OnIntersectCallback,
  useIntersectEffect,
  UseIntersectEffectOption,
} from "@/hooks/utils/intersection-observer";

export interface IntersectionBoxProps
  extends Omit<HTMLProps<HTMLDivElement>, "ref"> {
  onIntersect: OnIntersectCallback<HTMLDivElement>;
  intersectOptions?: UseIntersectEffectOption;
}

const _IntersectionBox: FC<IntersectionBoxProps> = (props) => {
  const { onIntersect, intersectOptions, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);
  useIntersectEffect(ref, onIntersect, intersectOptions);
  return <div ref={ref} {...rest} />;
};

const IntersectionBox: FC<IntersectionBoxProps> = memo(_IntersectionBox);

export default IntersectionBox;
