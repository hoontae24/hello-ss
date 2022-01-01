import { useCallback, useEffect, useMemo, useState } from "react";

import { ReviewSection } from "@/typings/domains/review-section";

export interface ReviewSectionStoreDeps {
  fetchUrl: string | null;
}

export interface ReviewSectionStore {
  loading: boolean;
  reviewSection: ReviewSection | null | undefined;
}

export const useReviewSectionStore = (deps: ReviewSectionStoreDeps) => {
  const { fetchUrl } = deps;

  const [data, setData] = useState<ReviewSection | null>();
  const [error, setError] = useState<Error>();

  const load = useCallback(
    async (url: string | null) => {
      if (!url) return setData(null);
      try {
        const data = await fetcher(url);
        setData(data);
      } catch (e) {
        if (e instanceof Error) {
          return setError(e);
        }
        setError(new Error("unknown error"));
      }
    },
    [setData]
  );

  useEffect(() => {
    load(fetchUrl);
  }, [fetchUrl]);

  const store: ReviewSectionStore = {
    loading: data === undefined && error === undefined,
    reviewSection: data,
  };

  return useMemo(() => store, Object.values(store));
};

const fetcher = async (url: string): Promise<ReviewSection | null> => {
  const data = await window.fetch(url).then((res) => res.json());
  const { components: [component] = [] } = data;
  return component ?? null;
};
