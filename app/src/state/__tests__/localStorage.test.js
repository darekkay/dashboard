import { resetPendingStatus } from "../localStorage";

describe("localStorage", () => {
  test("resetPendingStatus resets pending widget status", () => {
    const actual = resetPendingStatus.in(
      {
        "random-image-01": {
          meta: {
            updateStatus: "pending",
          },
        },
      },
      "widgets",
      {}
    );
    const expected = {
      "random-image-01": {
        meta: {
          updateStatus: "idle",
        },
      },
    };

    expect(actual).toEqual(expected);
  });
});
