import {
  initialState,
  reducerWithInitialState,
  actionCreators
} from "../sharedData";

describe("Heartbeat duck", () => {
  it("updates the state", () => {
    const mockDate = Date.now();
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.setSharedDataValue({
        widgetType: "date-time",
        value: { date: mockDate }
      })
    );

    expect(updatedState).toEqual({
      "date-time": {
        date: mockDate
      }
    });
  });
});
