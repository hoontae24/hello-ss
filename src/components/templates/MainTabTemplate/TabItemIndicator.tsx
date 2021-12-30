import clsx from "clsx";
import { memo, VFC } from "react";

import cls from "./styles.module.scss";

export interface TabItemIndicatorProps {
  selected: boolean;
}

const _TabItemIndicator: VFC<TabItemIndicatorProps> = (props) => {
  const { selected } = props;
  return (
    <span className={clsx(cls.indicator, selected && cls.indecatorSelected)} />
  );
};

const TabItemIndicator: VFC<TabItemIndicatorProps> = memo(_TabItemIndicator);

export default TabItemIndicator;
