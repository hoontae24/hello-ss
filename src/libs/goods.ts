export const countWithSuffix = (count: number): string => {
  if (count < 1000) return count.toFixed();
  return (count / 1000).toFixed(1) + "K";
};

export const priceWithSuffix = (price: number, currency = "원"): string => {
  return price.toLocaleString() + currency;
};
