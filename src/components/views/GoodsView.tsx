import { memo, VFC } from "react";

import GoodsTemplate from "@/components/templates/GoodsTemplate";
import { useGoodsListStore } from "@/hooks/goods-list-store";

export interface GoodsViewProps {
  initialFetchUrl: string;
}

const _GoodsView: VFC<GoodsViewProps> = (props) => {
  const { initialFetchUrl } = props;

  const { data, loadMore } = useGoodsListStore({ initialFetchUrl });

  return <GoodsTemplate data={data} onBottomIntersect={loadMore} />;
};

const GoodsView: VFC<GoodsViewProps> = memo(_GoodsView);

export default GoodsView;
