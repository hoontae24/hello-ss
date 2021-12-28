import clsx from "clsx";
import { FC, memo, useCallback } from "react";

import { TabContext, TabContextProvider, TabValue } from "@/contexts/tab";
import { HasClassName } from "@/libs/styles";

import cls from "./index.module.scss";

export interface TabsProps extends HasClassName {
  value: TabValue | null;
  onChange: (value: TabValue) => void;
}

const _Tabs: FC<TabsProps> = (props) => {
  const { className, value, onChange, children } = props;

  const handleChange = useCallback(
    (value: TabValue | null) => {
      if (value !== null) onChange?.(value);
    },
    [onChange]
  );

  const isSelected = useCallback((v: TabValue | null) => v === value, [value]);

  const context: TabContext = {
    value: value,
    onChange: handleChange,
    isSelected: isSelected,
  };

  return (
    <TabContextProvider value={context}>
      <ul className={clsx(cls.root, className)}>{children}</ul>
    </TabContextProvider>
  );
};

const Tabs: FC<TabsProps> = memo(_Tabs);

export default Tabs;
