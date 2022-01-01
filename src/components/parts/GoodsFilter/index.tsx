import clsx from "clsx";
import Link from "next/link";
import { memo, VFC } from "react";

import { getBadgeLabel } from "@/consts/badge";
import { classes, HasClassName } from "@/libs/styles";
import { GoodsFilterState } from "@/typings/domains/goods";

import _cls from "./styles.module.scss";

export interface GoodsFilterProps extends HasClassName {
  states: GoodsFilterState[];
}

const _GoodsFilter: VFC<GoodsFilterProps> = (props) => {
  const { states } = props;
  const cls = classes(_cls, props);

  return (
    <div className={cls.root}>
      {states.map((state) => (
        <Link key={state.value} href={state.href}>
          <a className={clsx(cls.item, state.selected && cls.itemSelected)}>
            {getBadgeLabel(state.value)}
          </a>
        </Link>
      ))}
    </div>
  );
};

const GoodsFilter: VFC<GoodsFilterProps> = memo(_GoodsFilter);

export default GoodsFilter;
