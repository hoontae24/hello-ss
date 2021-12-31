import { memo, VFC } from "react";

import cls from "./styles.module.scss";

export interface TitleProps {
  brandName: string;
  goodsName: string;
}

const _Title: VFC<TitleProps> = (props) => {
  const { brandName, goodsName } = props;

  const title = `${brandName} ${goodsName}`;

  return (
    <div className={cls.title} title={title}>
      <b className={cls.brandName}>{brandName}</b>
      {goodsName}
    </div>
  );
};

const Title: VFC<TitleProps> = memo(_Title);

export default Title;
