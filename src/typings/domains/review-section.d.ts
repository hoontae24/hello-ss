import { GoodsWithReviews } from "@/typings/domains/goods";

export interface Review {
  // 리뷰 ID
  id: number;
  // 이미지 정보
  picture: {
    // 이미지 ID
    id: number;
  };
  // 유저 네임
  authorUsername: string;
}

export interface ReviewSection {
  // 타입
  type: "review";
  // 컴포넌트 타이틀
  title: string;
  // 노출 위치
  position: number;
  // 상품 데이터
  data: GoodsWithReviews[];
}
