import Image from "next/image";
import { memo, SyntheticEvent, useCallback, VFC } from "react";

import { FavoriteIcon, FavoriteOutlineIcon } from "@/components/icons";

import cls from "./styles.module.scss";
import clsx from "clsx";

export interface PictureProps {
  pictureId: string;
  liked: boolean;
  onLikeClick: () => void;
}

const _Picture: VFC<PictureProps> = (props) => {
  const { pictureId, liked, onLikeClick } = props;

  const handleLikeClick = useCallback(
    (e: SyntheticEvent) => {
      e.stopPropagation();
      onLikeClick();
    },
    [onLikeClick]
  );

  return (
    <div className={cls.picture}>
      <div className={cls.pictureFrame} />
      <Image
        alt=""
        src={`https://usercontents-d.styleshare.io/images/${pictureId}/384x384`}
        layout="fill"
      />
      <button
        className={clsx(cls.like, liked && cls.likeSelected)}
        onClick={handleLikeClick}
      >
        {liked ? <FavoriteIcon /> : <FavoriteOutlineIcon />}
      </button>
    </div>
  );
};

const Picture: VFC<PictureProps> = memo(_Picture);

export default Picture;
