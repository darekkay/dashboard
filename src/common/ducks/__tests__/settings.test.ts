import {
  initialState,
  reducerWithInitialState,
  actionCreators
} from "../config";

describe("Settings duck", () => {
  it("updates the color theme", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.changeTheme("mock")
    );

    expect(updatedState.theme).toEqual("mock");
  });
});
