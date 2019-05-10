import {
  initialState,
  reducerWithInitialState,
  actionCreators,
  getMinuteDate
} from "../heartbeat";

describe("Heartbeat duck", () => {
  it("updates the state", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.sendHeartbeat(123)
    );

    expect(updatedState).toEqual(123);
  });

  it("strips seconds and milliseconds", () => {
    expect(getMinuteDate(1557493561234)).toEqual(1557493560000);
  });

  xit("updates the shared date value when the minute changes", () => {
    test.todo("Write redux-observables test"); // TODO
  });
});
