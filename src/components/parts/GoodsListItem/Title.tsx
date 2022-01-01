import clsx from "clsx";
import { memo, VFC } from "react";

import cls from "./styles.module.scss";

export interface TitleProps {
  oneline?: boolean;
  brandName: string;
  goodsName: string;
}

const _Title: VFC<TitleProps> = (props) => {
  const { oneline, brandName, goodsName } = props;

  const title = `${brandName} ${goodsName}`;

  return (
    <div className={clsx(cls.title, oneline && cls.titleOneline)} title={title}>
      <b className={cls.brandName}>{brandName}</b>
      {goodsName}
    </div>
  );
};

const Title: VFC<TitleProps> = memo(_Title);

export default Title;
