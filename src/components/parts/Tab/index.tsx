import clsx from "clsx";
import { FC, memo, useCallback, useMemo } from "react";

import { TabValue, useTabContext } from "@/contexts/tab";
import { HasClassName } from "@/typings/components";

import cls from "./index.module.scss";

export interface TabProps extends HasClassName {
  value?: TabValue;
}

const _Tab: FC<TabProps> = (props) => {
  const { onChange, isSelected } = useTabContext();
  const { className, value, children } = props;

  const selected = useMemo(() => {
    return !!value && isSelected(value);
  }, [value, isSelected]);

  const handleChange = useCallback(() => {
    if (value) onChange(value);
  }, [value, onChange]);

  return (
    <li className={clsx(cls.root, selected && cls.rootSelected, className)}>
      <div className={clsx(cls.indicator, selected && cls.indecatorSelected)} />
      <button
        className={clsx(cls.button, selected && cls.buttonSelected)}
        onClick={handleChange}
      >
        {children}
      </button>
    </li>
  );
};

const Tab: FC<TabProps> = memo(_Tab);

export default Tab;
