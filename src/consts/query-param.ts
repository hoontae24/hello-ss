import { ValueOf } from "@/typings/utils";

export const QueryParam = {
  MAIN_TAB: "MAIN_TAB",
} as const;
export type QueryParam = ValueOf<typeof QueryParam>;

export interface QueryParamHelper {
  getKey: () => string;
}

class MainTabHelper implements QueryParamHelper {
  getKey = () => "main-tab";
}

class HelperFactory {
  static helperMap: Record<QueryParam, QueryParamHelper> = {
    [QueryParam.MAIN_TAB]: new MainTabHelper(),
  };

  static getHelper = (value: QueryParam): QueryParamHelper => {
    return HelperFactory.helperMap[value];
  };
}

export const getQueryParamKey = (value: QueryParam): string => {
  const helper = HelperFactory.getHelper(value);
  return helper.getKey();
};
