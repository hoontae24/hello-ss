import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { PromiseOrValue } from "@/typings/utils";

export interface RelayStoreDeps<Data> {
  initialFetchUrl: string;
  fetcher: (url: string) => Promise<Data>;
  next: (data: Data) => PromiseOrValue<string | null>;
}

export interface RelayStore<Data> {
  data: Data[] | undefined;
  depleted: boolean;
  sprint: () => Promise<void>;
}

export const useRelayStore = <Data = any>(
  deps: RelayStoreDeps<Data>
): RelayStore<Data> => {
  const [data, setData] = useState<Data[]>();
  const fetchUrlRef = useRef<string | null>(deps.initialFetchUrl);
  const depsRef = useRef<RelayStoreDeps<Data>>(deps);
  depsRef.current = deps;

  const sprint = useCallback(async () => {
    if (!fetchUrlRef.current) return;

    const data = await depsRef.current.fetcher(fetchUrlRef.current);
    fetchUrlRef.current = await depsRef.current.next(data);

    setData((prev) => (prev ?? []).concat(data));
  }, []);

  useEffect(() => {
    setData(undefined);
    fetchUrlRef.current = depsRef.current.initialFetchUrl;
    sprint();
  }, [depsRef.current.initialFetchUrl]);

  const store: RelayStore<Data> = {
    data: data,
    depleted: !fetchUrlRef.current,
    sprint: sprint,
  };

  return useMemo(() => store, Object.values(store));
};
