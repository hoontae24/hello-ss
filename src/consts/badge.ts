import { equals } from "@/libs/functions";
import { ValueOf } from "@/typings/utils";

export const Badge = {
  FREE_DELIVERY: "free_delivery",
  ONLY_STYLESHARE: "only_styleshare",
  NEW_ARRIVAL: "new_arrival",
} as const;
export type Badge = ValueOf<typeof Badge>;

export const allBadges: Badge[] = Object.values(Badge);
export const isValidBadge = (value: unknown): value is Badge =>
  allBadges.some(equals(value));

export interface BadgeHelper {
  getLabel: () => string;
}

class FreeDelivery implements BadgeHelper {
  getLabel = () => "무료배송";
}

class OnlyStyleshare implements BadgeHelper {
  getLabel = () => "단독";
}

class NewArrival implements BadgeHelper {
  getLabel = () => "신상품";
}

class HelperFactory {
  static helperMap: Record<Badge, BadgeHelper> = {
    [Badge.FREE_DELIVERY]: new FreeDelivery(),
    [Badge.ONLY_STYLESHARE]: new OnlyStyleshare(),
    [Badge.NEW_ARRIVAL]: new NewArrival(),
  };

  static getHelper = (value: Badge): BadgeHelper => {
    return HelperFactory.helperMap[value];
  };
}

export const getBadgeLabel = (value: Badge): string => {
  const helper = HelperFactory.getHelper(value);
  return helper.getLabel();
};

export const getBadgesByQueryValue = (
  value: string | string[] | undefined
): Badge[] => {
  const result: Badge[] = [];
  if (value) {
    const badges = Array.isArray(value) ? value : [value];
    result.push(...badges.filter(isValidBadge));
  }
  return result;
};
