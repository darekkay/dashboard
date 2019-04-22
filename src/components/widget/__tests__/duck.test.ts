import _ from "lodash";
import { initialState, reducerWithInitialState, actionCreators } from "../duck";

describe("Widget duck", () => {
  it("updates the widget's option value", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.setOption({ id: "id-01", key: "content", value: "mock" })
    );

    expect(_.get(updatedState, "id-01.options.content")).toEqual("mock");
  });
});
