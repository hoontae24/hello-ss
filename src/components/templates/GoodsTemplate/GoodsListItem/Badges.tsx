import { memo, VFC } from "react";

import { Badge, getBadgeLabel } from "@/consts/badge";

import cls from "./styles.module.scss";

export interface BadgesProps {
  badges: Badge[];
}

const _Badges: VFC<BadgesProps> = (props) => {
  const { badges } = props;
  return (
    <div className={cls.badges}>
      {badges.map((badge) => (
        <span key={badge}>{getBadgeLabel(badge)}</span>
      ))}
    </div>
  );
};

const Badges: VFC<BadgesProps> = memo(_Badges);

export default Badges;
