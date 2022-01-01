import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

import { allBadges, Badge } from "@/consts/badge";
import { getQueryParamKey, QueryParam } from "@/consts/query-param";
import { toggle } from "@/libs/functions";
import { GoodsFilterState } from "@/typings/domains/goods";

export interface GoodsFilterStatesDeps {
  filters: Badge[];
}

export const useGoodsFilterStates = (
  deps: GoodsFilterStatesDeps
): GoodsFilterState[] => {
  const router = useRouter();
  const { filters } = deps;

  const queryKey = getQueryParamKey(QueryParam.BADGE_FILTER);

  const createState = useCallback(
    (badge: Badge): GoodsFilterState => {
      const selected = filters.includes(badge);
      const query = {
        ...router.query,
        [queryKey]: toggle(filters, badge),
      };
      return {
        value: badge,
        selected: selected,
        href: { query },
      };
    },
    [router, filters]
  );

  const filterStates = useMemo(() => allBadges.map(createState), [createState]);

  return filterStates;
};
