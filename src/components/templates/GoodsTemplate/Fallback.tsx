import { memo, VFC } from "react";

import { SadIcon } from "@/components/icons";

import cls from "./styles.module.scss";

export interface FacllbackProps {}

const _Facllback: VFC<FacllbackProps> = () => {
  return (
    <div className={cls.fallback}>
      <SadIcon />
      <br />
      상품을 하나도 찾지 못했어요.
    </div>
  );
};

const Facllback: VFC<FacllbackProps> = memo(_Facllback);

export default Facllback;
