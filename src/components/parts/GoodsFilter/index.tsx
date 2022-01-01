import { memo, VFC } from "react";

import { getBadgeLabel } from "@/consts/badge";
import { GoodsFilterState } from "@/typings/domains/goods";

import cls from "./styles.module.scss";
import Link from "next/link";

export interface GoodsFilterProps {
  states: GoodsFilterState[];
}

const _GoodsFilter: VFC<GoodsFilterProps> = (props) => {
  const { states } = props;

  return (
    <div className={cls.root}>
      {states.map((state) => (
        <Link key={state.value} href={state.href}>
          <a>
            <div>
              {getBadgeLabel(state.value)}
              {state.selected && "***"}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

const GoodsFilter: VFC<GoodsFilterProps> = memo(_GoodsFilter);

export default GoodsFilter;
