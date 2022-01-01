import env from "@/consts/env";
import { Goods } from "@/typings/domains/goods";

export const countWithSuffix = (count: number): string => {
  const suffixes = ["M", "K", ""];
  while (suffixes.length > 1 && count >= 1000) {
    count = count / 1000;
    suffixes.pop();
  }
  return count.toFixed(count % 1 >= 0.1 ? 1 : 0) + suffixes.pop();
};

export const priceWithSuffix = (price: number, currency = "원"): string => {
  return price.toLocaleString() + currency;
};

export const getPictureUrl = (
  pictureId: string | number,
  size: 128 | 256 | 384 = 384
) => {
  const url = `${env.IMAGE_BASE_URL}/${pictureId}/${size}x${size}`;
  return url;
};

export const getGoodsTitle = (goods: Goods): string => {
  return `${goods.brand.name} ${goods.name}`;
};
