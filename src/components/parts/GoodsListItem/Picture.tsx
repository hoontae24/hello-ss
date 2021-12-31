import Image from "next/image";
import { memo, VFC } from "react";

import cls from "./styles.module.scss";

export interface PictureProps {
  pictureId: string;
}

const _Picture: VFC<PictureProps> = (props) => {
  const { pictureId } = props;

  return (
    <div className={cls.picture}>
      <div className={cls.pictureFrame} />
      <Image
        alt=""
        src={`https://usercontents-d.styleshare.io/images/${pictureId}/384x384`}
        layout="fill"
      />
    </div>
  );
};

const Picture: VFC<PictureProps> = memo(_Picture);

export default Picture;
