import { createAction } from "@reduxjs/toolkit";

import { State } from "state/store";

/* It is not possible for combineReducers to access/adjust global state: https://github.com/reduxjs/redux/issues/2750
 * Hence, every reducer has to handle its substate separately when importing a full state. */
export const importState = createAction<State>("state/import");

export const actionCreators = {
  importState,
};
