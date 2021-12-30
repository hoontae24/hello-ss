import { memo, VFC } from "react";

import MainTabTemplate from "@/components/templates/MainTabTemplate";
import { MainTab } from "@/consts/main-tab";
import { useMainTabState } from "@/hooks/main-tab-state";

export interface MainTabViewProps {
  currentMainTab: MainTab;
}

const _MainTabView: VFC<MainTabViewProps> = (props) => {
  const { currentMainTab } = props;

  const { tabStates } = useMainTabState({ current: currentMainTab });

  return <MainTabTemplate tabStates={tabStates} />;
};

const MainTabView: VFC<MainTabViewProps> = memo(_MainTabView);

export default MainTabView;
