/**
 * Common wrapper around testing utilities.
 *
 * All utilities from @testing-library/react are re-exported.
 * Additionally, utilities from @testing-library/user-event and @testing-library/react-hooks are provided.
 * */

import React from "react";
import type { Action, AnyAction, Store } from "redux";
import { Provider } from "react-redux";
import { runSaga, type Saga } from "redux-saga";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import initStore, { type State } from "../state/store";
import { stateProps } from "./utils/mock";

// Re-export utilities from @testing-library
export * from "@testing-library/react";

export { userEvent };

// Based on: https://github.com/kentcdodds/react-testing-library-course/blob/tjs/src/__tests__/redux-03.js
export const renderConnected = (
  ui: React.ReactElement,
  {
    initialState,
    store = initStore(initialState).store,
    ...renderOptions
  }: { initialState?: State; store?: Store<State> } = {}
) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return {
    ...render(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
    store,
  };
};

/** Executes a redux-saga and returns dispatched actions */
export const executeSaga = async (
  saga: Saga,
  action: AnyAction,
  state: State = stateProps
) => {
  const dispatchedActions: Array<Action> = [];

  await runSaga(
    {
      dispatch(dispatchedAction: Action) {
        dispatchedActions.push(dispatchedAction);
      },
      getState() {
        return state;
      },
    },
    saga,
    action
  );

  return {
    dispatchedActions,
  };
};
