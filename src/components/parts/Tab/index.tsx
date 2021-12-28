import clsx from "clsx";
import { FC, memo, useCallback, useMemo } from "react";

import { classes, HasClasses, HasClassName } from "@/libs/styles";
import { TabValue, useTabContext } from "@/contexts/tab";

import _cls from "./index.module.scss";

export interface TabProps extends HasClassName, HasClasses<keyof typeof _cls> {
  value?: TabValue;
}

const _Tab: FC<TabProps> = (props) => {
  const { onChange, isSelected } = useTabContext();
  const { value, children } = props;
  const cls = classes(_cls, props);

  const selected = useMemo(() => {
    return !!value && isSelected(value);
  }, [value, isSelected]);

  const handleChange = useCallback(() => {
    if (value) onChange(value);
  }, [value, onChange]);

  return (
    <li className={clsx(cls.root, selected && cls.rootSelected)}>
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
