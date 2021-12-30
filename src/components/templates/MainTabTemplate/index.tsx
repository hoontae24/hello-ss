import { memo, VFC } from "react";

import { getMainTabLabel } from "@/consts/main-tab";
import { TabState } from "@/typings/domains/tab-state";

import TabRoot from "./TabRoot";
import TabItem from "./TabItem";

export interface MainTabTemplateProps {
  tabStates: TabState[];
}

const _MainTabTemplate: VFC<MainTabTemplateProps> = (props) => {
  const { tabStates } = props;

  return (
    <TabRoot>
      {tabStates.map((state) => {
        const label = getMainTabLabel(state.value);
        return (
          <TabItem
            key={state.value}
            value={state.value}
            selected={state.selected}
            href={state.href}
          >
            {label}
          </TabItem>
        );
      })}
    </TabRoot>
  );
};

const MainTabTemplate: VFC<MainTabTemplateProps> = memo(_MainTabTemplate);

export default MainTabTemplate;
