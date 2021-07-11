import React, { useEffect } from "react";
import { connect } from "react-redux";
import Fullscreen from "react-full-screen";
import isEmpty from "lodash/isEmpty";

import { actions as layoutActions, Layout } from "common/ducks/layout";
import { actions as stateActions } from "common/ducks/state";
import useToggle from "common/hooks/useToggle";
import Dashboard from "components/dashboard";
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
    addWidgetToLayout,
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
      <div
        className="flex flex-col absolute inset-0 bg-cover bg-fixed bg-offset"
        style={
          isEmpty(backgroundUrl)
            ? undefined
            : {
                backgroundImage: `url("${backgroundUrl}")`,
              }
        }
      >
        <Header
          isFullscreen={isFullscreen}
          toggleFullscreen={toggleFullscreen}
          addWidgetToLayout={addWidgetToLayout}
        />

        <div className="flex h-full flex-col md:flex-row overflow-y-auto bg-transparent text-default bg-cover bg-fixed">
          <main className="flex-grow w-full p-1 md:p-6">
            <Dashboard
              layout={layout}
              widgetIDs={widgetIDs}
              saveLayout={saveLayout}
              importState={importState}
            />
          </main>
        </div>
      </div>
    </Fullscreen>
  );
};

export interface SelectedProps {
  widgetIDs: string[];
  layout: Layout;
  currentTheme: Theme;
  backgroundUrl: string;
}

export interface Props extends SelectedProps {
  saveLayout: (layout: Layout) => void;
  addWidgetToLayout: (widgetType: WidgetType) => void;
  importState: (state: State) => void;
}

export default connect(mapStateToProps, {
  ...layoutActions,
  ...stateActions,
})(App);
