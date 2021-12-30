import { FC, memo } from "react";

import cls from "./styles.module.scss";

export interface TabRootProps {}

const _TabRoot: FC<TabRootProps> = (props) => {
  const { children } = props;
  return <ul className={cls.root}>{children}</ul>;
};

const TabRoot: FC<TabRootProps> = memo(_TabRoot);

export default TabRoot;
