import React, { useEffect } from "react";
import { connect } from "react-redux";
import Fullscreen from "react-full-screen";

import {
  actionCreators as layoutActionCreators,
  Layout,
} from "common/ducks/layout";
import { actionCreators as stateActionCreators } from "common/ducks/state";
import useToggle from "common/hooks/useToggle";
import Dashboard from "components/dashboard";
import Drawer from "components/drawer";
import Header from "components/header";
import { updateCssVariables, Theme } from "components/settings/theme-select";
import { WidgetType } from "widgets/list";
import { State } from "state/store";

import mapStateToProps from "./selectors";

export const App: React.FC<Props> = (props) => {
  const {
    widgetIDs,
    layout,
    saveLayout,
    isLayoutEditable,
    toggleLayoutEditable,
    addWidgetToLayout,
    removeWidgetFromLayout,
    importState,
    currentTheme,
  } = props;

  useEffect(() => {
    updateCssVariables(currentTheme);
  }, [currentTheme]);

  const [isFullscreen, toggleFullscreen] = useToggle(false);

  return (
    <Fullscreen
      enabled={isFullscreen}
      onChange={(isFull) => toggleFullscreen(isFull)}
    >
      <Header
        isLayoutEditable={isLayoutEditable}
        toggleLayoutEditable={toggleLayoutEditable}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />
      <div className="flex h-full flex-col md:flex-row overflow-y-auto bg-color-default text-color-default">
        <main className="flex-grow w-full p-1 md:p-6">
          <Dashboard
            layout={layout}
            isLayoutEditable={isLayoutEditable}
            widgetIDs={widgetIDs}
            saveLayout={saveLayout}
            removeWidgetFromLayout={removeWidgetFromLayout}
            importState={importState}
          />
        </main>
        {isLayoutEditable && <Drawer addWidgetToLayout={addWidgetToLayout} />}
      </div>
    </Fullscreen>
  );
};

export interface Props {
  widgetIDs: string[];

  layout: Layout;
  saveLayout: (layout: Layout) => void;

  isLayoutEditable: boolean;
  toggleLayoutEditable: () => void;

  addWidgetToLayout: (widgetType: WidgetType) => void;
  removeWidgetFromLayout: (widgetId: string) => void;
  importState: (state: State) => void;

  currentTheme: Theme;
}

export default connect(mapStateToProps, {
  ...layoutActionCreators,
  ...stateActionCreators,
})(App);
