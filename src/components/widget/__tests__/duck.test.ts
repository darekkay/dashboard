import _ from "lodash";
import { initialState, reducerWithInitialState, actionCreators } from "../duck";

describe("Widget duck", () => {
  it("updates the widget's option value", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.setOptions({
        id: "date-time-01",
        values: { content: "mock" }
      })
    );

    expect(_.get(updatedState, "date-time-01.options.content")).toEqual("mock");
  });

  it("updates the widget's data value", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.setData({
        id: "date-time-01",
        values: { content: "mock" }
      })
    );

    expect(_.get(updatedState, "date-time-01.data.content")).toEqual("mock");
  });
});
