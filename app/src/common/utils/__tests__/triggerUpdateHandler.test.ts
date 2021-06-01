import { executeSaga } from "common/testing";
import { updateError, updateSuccess } from "components/widget/duck";

import triggerUpdateHandler from "../triggerUpdateHandler";

describe("triggerUpdateHandler", () => {
  test("handles successful updates", async () => {
    const apiCall = jest.fn();

    const saga = triggerUpdateHandler(apiCall);
    const { dispatchedActions } = await executeSaga(saga, {
      type: "mock-action",
      payload: {
        id: "widget-01",
        params: 123,
      },
    });

    expect(apiCall).toHaveBeenCalledWith(123);
    expect(dispatchedActions).toHaveLength(3);
    expect(dispatchedActions[dispatchedActions.length - 1].type).toEqual(
      updateSuccess.type
    );
  });
  test("handles failed updates", async () => {
    const apiCall = jest.fn().mockImplementation(() => {
      throw new Error("api call error");
    });

    const saga = triggerUpdateHandler(apiCall);
    const { dispatchedActions } = await executeSaga(saga, {
      type: "mock-action",
      payload: {
        id: "widget-01",
        params: 123,
      },
    });

    expect(apiCall).toHaveBeenCalledWith(123);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[dispatchedActions.length - 1].type).toEqual(
      updateError.type
    );
  });
});
