import {
  initialState,
  reducerWithInitialState,
  actionCreators
} from "../layout";

describe("Layout duck", () => {
  it("saves the layout", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.saveLayout("mockLayout")
    );

    expect(updatedState.config).toEqual("mockLayout");
  });

  it("toggles the editing state", () => {
    let updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.toggleLayoutEditable()
    );

    expect(updatedState.isEditable).toEqual(true);

    updatedState = reducerWithInitialState()(
      updatedState,
      actionCreators.toggleLayoutEditable()
    );

    expect(updatedState.isEditable).toEqual(false);
  });
});
