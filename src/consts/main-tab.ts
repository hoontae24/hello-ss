import { equals } from "@/libs/functions";
import { ValueOf } from "@/typings/utils";

export const MainTab = {
  POPULARITY: "POPULARITY",
  LATEST: "LATEST",
} as const;
export type MainTab = ValueOf<typeof MainTab>;

export const allMainTabs = Object.values(MainTab);
export const defaultMainTab = MainTab.POPULARITY;
export const isValidMainTab = (value: unknown): value is MainTab => {
  return allMainTabs.some(equals(value));
};

export interface MainTabHelper {
  getLabel: () => string;
  getQueryValue: () => string;
}

class PopularityHelper implements MainTabHelper {
  getLabel = () => "인기순";
  getQueryValue = () => "popularity";
}

class LatestHelper implements MainTabHelper {
  getLabel = () => "최신순";
  getQueryValue = () => "latest";
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

export const getMainTabQueryValue = (value: MainTab): string => {
  const helper = HelperFactory.getHelper(value);
  return helper.getQueryValue();
};

export const getMainTabByQueryValue = (value: string): MainTab => {
  const mainTab = allMainTabs.find(
    (tab) => getMainTabQueryValue(tab) === value
  );
  return mainTab || defaultMainTab;
};