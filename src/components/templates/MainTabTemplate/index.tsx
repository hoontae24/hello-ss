import { memo, useCallback, VFC } from "react";

import Tabs from "@/components/parts/Tabs";
import Tab from "@/components/parts/Tab";
import { allMainTabs, isValidMainTab, MainTab } from "@/consts/main-tab";

export interface MainTabTemplateProps {
  tab: MainTab;
  onTabChange: (tab: MainTab) => void;
}

const _MainTabTemplate: VFC<MainTabTemplateProps> = (props) => {
  const { tab, onTabChange } = props;

  const handleTabChange = useCallback(
    (value: unknown) => {
      if (!isValidMainTab(value)) return;
      onTabChange?.(value);
    },
    [onTabChange]
  );

  return (
    <Tabs value={tab} onChange={handleTabChange}>
      {allMainTabs.map((tab) => {
        return (
          <Tab key={tab} value={tab}>
            {tab}
          </Tab>
        );
      })}
    </Tabs>
  );
};

const MainTabTemplate: VFC<MainTabTemplateProps> = memo(_MainTabTemplate);

export default MainTabTemplate;
