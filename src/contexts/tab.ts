import { createContext, useContext } from "react";

export type TabValue = string | number;

export interface TabContext {
  value: TabValue | null;
  onChange: (value: TabValue | null) => void;
  isSelected: (value: TabValue | null) => boolean;
}

export const tabContext = createContext<TabContext>({
  value: null,
  onChange: () => null,
  isSelected: () => false,
});

export const TabContextProvider = tabContext.Provider;

export const useTabContext = (): TabContext => {
  const context = useContext(tabContext);
  return context;
};
