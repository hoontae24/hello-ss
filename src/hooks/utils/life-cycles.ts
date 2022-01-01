import { useCallback, useState } from "react";

export interface ForceUpdateState {
  updated: {};
  forceUpdate: () => void;
}

export const useForceUpdate = (): ForceUpdateState => {
  const [updated, update] = useState({});
  const forceUpdate = useCallback(() => update({}), [update]);
  return { updated, forceUpdate };
};
