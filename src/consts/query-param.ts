import { ValueOf } from "@/typings/utils";

export const QueryParam = {
  MAIN_TAB: "MAIN_TAB",
  BADGE_FILTER: "BADGE_FILTER",
} as const;
export type QueryParam = ValueOf<typeof QueryParam>;

export interface QueryParamHelper {
  getKey: () => string;
}

class MainTabHelper implements QueryParamHelper {
  getKey = () => "main-tab";
}

class BadgeFilterHelper implements QueryParamHelper {
  getKey = () => "badge-filter";
}

class HelperFactory {
  static helperMap: Record<QueryParam, QueryParamHelper> = {
    [QueryParam.MAIN_TAB]: new MainTabHelper(),
    [QueryParam.BADGE_FILTER]: new BadgeFilterHelper(),
  };

  static getHelper = (value: QueryParam): QueryParamHelper => {
    return HelperFactory.helperMap[value];
  };
}

export const getQueryParamKey = (value: QueryParam): string => {
  const helper = HelperFactory.getHelper(value);
  return helper.getKey();
};
