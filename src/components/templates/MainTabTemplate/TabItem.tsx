import clsx from "clsx";
import Link from "next/link";
import { FC, memo } from "react";

import { MainTab } from "@/consts/main-tab";

import TabItemIndicator from "./TabItemIndicator";
import cls from "./styles.module.scss";

export interface TabItemProps {
  value: MainTab;
  selected: boolean;
  href: string;
}

const _TabItem: FC<TabItemProps> = (props) => {
  const { value, selected, href, children } = props;
  return (
    <li key={value} className={cls.wrapper}>
      <TabItemIndicator selected={selected} />
      <Link href={href}>
        <a className={clsx(cls.label, selected && cls.labelSelected)}>
          {children}
        </a>
      </Link>
    </li>
  );
};

const TabItem: FC<TabItemProps> = memo(_TabItem);

export default TabItem;
