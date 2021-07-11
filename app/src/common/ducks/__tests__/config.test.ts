import { importState } from "common/ducks/state";

import { initialState, reducer, actions } from "../config";

describe("Settings duck", () => {
  test("updates the background URL", () => {
    const updatedState = reducer(
      initialState,
      actions.changeBackgroundUrl("mock")
    );

    expect(updatedState.backgroundUrl).toEqual("mock");
  });

  test("updates the color theme", () => {
    const updatedState = reducer(initialState, actions.changeTheme("mock"));

    expect(updatedState.theme).toEqual("mock");
  });

  test("changes the language", () => {
    const updatedState = reducer(initialState, actions.changeLanguage("mock"));

    expect(updatedState.language).toEqual("mock");
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

    expect(updatedState.theme).toEqual("dark");
    expect(updatedState.language).toEqual("de");
    expect(updatedState.backgroundUrl).toEqual("image.png");
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

    expect(updatedState.theme).toEqual("default");
    expect(updatedState.language).toEqual("en");
    expect(updatedState.backgroundUrl).toEqual("");
  });
});
