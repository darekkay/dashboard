/**
 * Common wrapper around testing utilities.
 *
 * All utilities from @testing-library/react are re-exported.
 * Additionally, utilities from @testing-library/user-event and @testing-library/react-hooks are provided.
 * */

import React from "react";
import { Action, AnyAction, Store } from "redux";
import { Provider } from "react-redux";
import { runSaga } from "redux-saga";
import { Saga } from "@redux-saga/types";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// act differences: https://github.com/testing-library/react-hooks-testing-library/issues/173
import { renderHook, act as hookAct } from "@testing-library/react-hooks";

import initStore, { State } from "../state/store";
import { stateProps } from "./utils/mock";

// Re-export utilities from @testing-library
export * from "@testing-library/react";

export { userEvent, renderHook, hookAct };

// Based on: https://github.com/kentcdodds/react-testing-library-course/blob/tjs/src/__tests__/redux-03.js
export const renderConnected = (
  ui: React.ReactElement,
  {
    initialState,
    store = initStore(initialState).store,
    ...renderOptions
  }: { initialState?: State; store?: Store<State> } = {}
) => {
  const Wrapper: React.FC = ({ children }) => (
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

export const expectToThrow = (func: Function) => {
  const consoleErrorSpy = jest
    .spyOn(console, "error")
    .mockImplementation(() => {});

  expect(func).toThrow();

  expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
  jest.clearAllMocks();
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
