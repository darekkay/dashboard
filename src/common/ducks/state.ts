import { createAction, PayloadAction } from "@reduxjs/toolkit";

import { State } from "state/store";

export const importState = createAction<State>("state/import");

/* It is not possible for combineReducers to access/adjust global state: https://github.com/reduxjs/redux/issues/2750
 * Hence, every reducer has to handle its substate separately when importing a full state. */
export const handleImportState = (subStateName: string) => ({
  [importState as any]: (state: any, action: PayloadAction<State>) =>
    action.payload[subStateName]
});

export const actionCreators = {
  importState
};
