/** 브랜드 정보 */
export interface Brand {
  /** 브랜드 ID */
  id: 3193;
  /** 브랜드 이름 */
  name: "프랑켄모노";
}

export type Badge =
  | "free_delivery" // 무료배송
  | "only_styleshare" // 단독
  | "new_arrival"; // 신상품

/** 상품 정보 */
export interface Goods {
  /** 상품 ID */
  id: number;
  /** 상품명 */
  name: string;
  /** 좋아요 수 */
  likeCount: number;
  /** 리뷰 수 */
  reviewsCount: number;
  /** 가격 */
  price: number;
  /** 할인율 */
  discountRate: number;
  /** 할인 여부 */
  isDiscounted: boolean;
  /** 브랜드 정보 */
  brand: Brand;
  /** 이미지 정보 */
  picture: {
    /** 이미지 ID */
    id: string;
  };
  /** 뱃지 리스트 */
  badges: Badge[];
}
