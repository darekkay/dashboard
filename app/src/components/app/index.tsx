import React from "react";
import { connect } from "react-redux";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import isEmpty from "lodash/isEmpty";

import type { Layout } from "common/ducks/layout";
import { actions as layoutActions } from "common/ducks/layout";
import { actions as stateActions } from "common/ducks/state";
import Dashboard from "components/dashboard";
import Header from "components/header";
import type { WidgetType } from "widgets/list";
import type { State } from "state/store";

import mapStateToProps from "./selectors";

export const App = ({
  widgetIDs,
  layout,
  saveLayout,
  addWidgetToLayout,
  importState,
  backgroundUrl,
}: Props) => {
  const fullScreenHandle = useFullScreenHandle();

  return (
    <FullScreen handle={fullScreenHandle}>
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
          isFullscreen={fullScreenHandle.active}
          toggleFullscreen={
            fullScreenHandle.active
              ? fullScreenHandle.exit
              : fullScreenHandle.enter
          }
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
    </FullScreen>
  );
};

export interface SelectedProps {
  widgetIDs: string[];
  layout: Layout;
  backgroundUrl: string;
}

export interface Props extends SelectedProps {
  saveLayout: (layout: Layout) => void;
  addWidgetToLayout: (widgetType: WidgetType) => void;
  importState: (state: State) => void;
}

export default connect(mapStateToProps, {
  saveLayout: layoutActions.saveLayout,
  addWidgetToLayout: layoutActions.addWidgetToLayout,
  importState: stateActions.importState,
})(App);
