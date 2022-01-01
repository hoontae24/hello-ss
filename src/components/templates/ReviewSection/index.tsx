import { memo, VFC } from "react";

import { classes, HasClassName } from "@/libs/styles";
import { ReviewSection } from "@/typings/domains/review-section";

import GoodsItem from "./GoodsItem";
import _cls from "./styles.module.scss";

export interface ReviewSectionTemplateProps extends HasClassName {
  data: ReviewSection;
}

const _ReviewSectionTemplate: VFC<ReviewSectionTemplateProps> = (props) => {
  const { data } = props;
  const cls = classes(_cls, props);

  const { data: goodsList } = data;

  return (
    <li className={cls.root}>
      <h6 className={cls.title}>{data.title}</h6>
      <ul className={cls.contents}>
        {goodsList.map((goods) => (
          <GoodsItem key={goods.id} item={goods} />
        ))}
      </ul>
    </li>
  );
};

const ReviewSectionTemplate: VFC<ReviewSectionTemplateProps> = memo(
  _ReviewSectionTemplate
);

export default ReviewSectionTemplate;
