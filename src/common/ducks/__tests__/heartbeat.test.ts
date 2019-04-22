import {
  initialState,
  reducerWithInitialState,
  actionCreators
} from "../heartbeat";

describe("Heartbeat duck", () => {
  it("updates the state", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.sendHeartbeat(123)
    );

    expect(updatedState).toEqual(123);
  });
});
