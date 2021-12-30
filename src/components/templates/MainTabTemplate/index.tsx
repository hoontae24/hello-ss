import clsx from "clsx";
import Link from "next/link";
import { memo, VFC } from "react";

import { getMainTabLabel } from "@/consts/main-tab";
import { TabState } from "@/typings/domains/tab-state";

import cls from "./index.module.scss";

export interface MainTabTemplateProps {
  tabStates: TabState[];
}

const _MainTabTemplate: VFC<MainTabTemplateProps> = (props) => {
  const { tabStates } = props;

  return (
    <ul className={cls.root}>
      {tabStates.map((state) => {
        const label = getMainTabLabel(state.value);
        return (
          <li key={state.value} className={cls.wrapper}>
            <div
              className={clsx(
                cls.indicator,
                state.selected && cls.indecatorSelected
              )}
            />
            <Link href={state.href}>
              <a
                className={clsx(cls.label, state.selected && cls.labelSelected)}
              >
                {label}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const MainTabTemplate: VFC<MainTabTemplateProps> = memo(_MainTabTemplate);

export default MainTabTemplate;
