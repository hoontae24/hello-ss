import { RefObject, useCallback, useEffect, useMemo, useRef } from "react";

export interface OnIntersectCallback<E extends Element> {
  (intersected: boolean, element: E): void;
}

export interface UseIntersectEffectOption extends IntersectionObserverInit {}

export const useIntersectEffect = <E extends Element>(
  anchor: RefObject<E>,
  onIntersectCallback: OnIntersectCallback<E>,
  options?: UseIntersectEffectOption
) => {
  const onIntersectCallbackRef =
    useRef<OnIntersectCallback<E>>(onIntersectCallback);

  const memoizedOptions: UseIntersectEffectOption = useMemo(() => {
    return {
      root: options?.root,
      rootMargin: options?.rootMargin,
      threshold: options?.threshold,
    };
  }, [options?.root, options?.rootMargin, options?.threshold]);

  const callback = useCallback((entiries: IntersectionObserverEntry[]) => {
    const entry = entiries.find((entry) => entry.target === anchor.current);
    if (entry && anchor.current) {
      onIntersectCallbackRef.current(entry.isIntersecting, anchor.current);
    }
  }, []);

  useEffect(() => {
    onIntersectCallbackRef.current = onIntersectCallback;
  }, [onIntersectCallback]);

  useEffect(() => {
    if (!anchor.current) return;
    const observer = new IntersectionObserver(callback, memoizedOptions);
    observer.observe(anchor.current);
    return () => observer.disconnect();
  }, [anchor.current, callback, memoizedOptions]);
};
