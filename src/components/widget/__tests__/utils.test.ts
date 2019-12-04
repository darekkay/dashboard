import { shouldTriggerUpdate } from "../utils";

describe("shouldTriggerUpdate", () => {
  it("does not update if updateCycle is not defined", () => {
    expect(shouldTriggerUpdate({})).toBe(false);
  });

  it("does not update if the widget is already updating", () => {
    expect(shouldTriggerUpdate({ updateStatus: "pending" })).toBe(false);
  });

  it("updates if the component never updated before", () => {
    expect(shouldTriggerUpdate({ lastUpdated: Date.now() })).toBe(false);
  });

  it("does not update if the defined duration hasn't passed since last update", () => {
    expect(
      shouldTriggerUpdate(
        {
          updateCycle: { hours: 1 },
          lastUpdated: Date.parse("01 Jan 2019 14:30:00")
        },
        Date.parse("01 Jan 2019 15:00:00")
      )
    ).toBe(false);
  });

  it("updates if the defined duration has passed since last update", () => {
    expect(
      shouldTriggerUpdate(
        {
          updateCycle: { hours: 1 },
          lastUpdated: Date.parse("01 Jan 2019 13:30:00")
        },
        Date.parse("01 Jan 2019 15:00:00")
      )
    ).toBe(true);
  });
});
