import { equals } from "@/libs/functions";
import { ValueOf } from "@/typings/utils";

export const MainTab = {
  POPULARITY: "POPULARITY",
  LATEST: "LATEST",
} as const;
export type MainTab = ValueOf<typeof MainTab>;

export const allMainTabs = Object.values(MainTab);
export const defaultMainTab = MainTab.POPULARITY;
export const isValidMainTab = (value: unknown): value is MainTab => allMainTabs.some(equals(value));

export interface MainTabHelper {
  getLabel: () => string;
}

class PopularityHelper implements MainTabHelper {
  getLabel = () => "인기순";
}

class LatestHelper implements MainTabHelper {
  getLabel = () => "최신순";
}

class HelperFactory {
  static helperMap: Record<MainTab, MainTabHelper> = {
    [MainTab.POPULARITY]: new PopularityHelper(),
    [MainTab.LATEST]: new LatestHelper(),
  };

  static getHelper = (value: MainTab): MainTabHelper => {
    return HelperFactory.helperMap[value];
  };
}

export const getMainTabLabel = (value: MainTab): string => {
  const helper = HelperFactory.getHelper(value);
  return helper.getLabel();
};
