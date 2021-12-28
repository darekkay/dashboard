import { importState } from "common/ducks/state";

import { initialState, reducer, actions } from "../config";

describe("Settings duck", () => {
  test("updates the background URL", () => {
    const updatedState = reducer(
      initialState,
      actions.changeBackgroundUrl("mock")
    );

    expect(updatedState.backgroundUrl).toBe("mock");
  });

  test("updates the color theme", () => {
    const updatedState = reducer(initialState, actions.changeTheme("mock"));

    expect(updatedState.theme).toBe("mock");
  });

  test("changes the language", () => {
    const updatedState = reducer(initialState, actions.changeLanguage("mock"));

    expect(updatedState.language).toBe("mock");
  });

  test("imports all settings when available", () => {
    const updatedState = reducer(
      initialState,
      // @ts-expect-error
      importState({
        config: {
          theme: "dark",
          language: "de",
          backgroundUrl: "image.png",
        },
      })
    );

    expect(updatedState.theme).toBe("dark");
    expect(updatedState.language).toBe("de");
    expect(updatedState.backgroundUrl).toBe("image.png");
  });

  test("doesn't import empty language or theme", () => {
    const updatedState = reducer(
      {
        theme: "default",
        language: "en",
        backgroundUrl: "image.png",
      },
      // @ts-expect-error
      importState({
        config: {
          theme: "",
          language: "",
          backgroundUrl: "",
        },
      })
    );

    expect(updatedState.theme).toBe("default");
    expect(updatedState.language).toBe("en");
    expect(updatedState.backgroundUrl).toBe("");
  });
});
