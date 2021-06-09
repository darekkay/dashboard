import React, { useEffect } from "react";
import { connect } from "react-redux";
import Fullscreen from "react-full-screen";
import isEmpty from "lodash/isEmpty";

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
    backgroundUrl,
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
      <div className="flex flex-col absolute inset-0 bg-cover bg-fixed">
        <Header
          isLayoutEditable={isLayoutEditable}
          toggleLayoutEditable={toggleLayoutEditable}
          isFullscreen={isFullscreen}
          toggleFullscreen={toggleFullscreen}
        />
        <div
          className="flex h-full flex-col md:flex-row overflow-y-auto bg-transparent text-default bg-cover bg-fixed"
          style={
            isEmpty(backgroundUrl)
              ? undefined
              : {
                  backgroundImage: `url("${backgroundUrl}")`,
                }
          }
        >
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
      </div>
    </Fullscreen>
  );
};

export interface SelectedProps {
  widgetIDs: string[];
  layout: Layout;
  isLayoutEditable: boolean;
  currentTheme: Theme;
  backgroundUrl: string;
}

export interface Props extends SelectedProps {
  saveLayout: (layout: Layout) => void;
  toggleLayoutEditable: () => void;
  addWidgetToLayout: (widgetType: WidgetType) => void;
  removeWidgetFromLayout: (widgetId: string) => void;
  importState: (state: State) => void;
}

export default connect(mapStateToProps, {
  ...layoutActionCreators,
  ...stateActionCreators,
})(App);
