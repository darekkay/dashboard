import _ from "lodash";
import { initialState, reducerWithInitialState, actionCreators } from "../duck";

describe("Widget duck", () => {
  it("updates the widget's option value", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.setOption({
        id: "date-time-01",
        key: "content",
        value: "mock"
      })
    );

    expect(_.get(updatedState, "date-time-01.options.content")).toEqual("mock");
  });
});
