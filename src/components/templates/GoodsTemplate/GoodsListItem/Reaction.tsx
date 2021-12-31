import { memo, VFC } from "react";

import { countWithSuffix } from "@/libs/goods";

import cls from "./styles.module.scss";

export interface ReactionProps {
  likeCount: number;
  reviewsCount: number;
}

const _Reaction: VFC<ReactionProps> = (props) => {
  const { likeCount, reviewsCount } = props;

  if (!likeCount && !reviewsCount) return null;
  return (
    <div className={cls.reaction}>
      {likeCount > 0 && <span>좋아요 {countWithSuffix(likeCount)}</span>}
      {reviewsCount > 0 && <span>리뷰 {countWithSuffix(reviewsCount)}</span>}
    </div>
  );
};

const Reaction: VFC<ReactionProps> = memo(_Reaction);

export default Reaction;
