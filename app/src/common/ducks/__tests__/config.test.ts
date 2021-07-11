import { importState } from "common/ducks/state";

import {
  initialState,
  reducerWithInitialState,
  actionCreators,
} from "../config";

describe("Settings duck", () => {
  test("updates the color theme", () => {
    const updatedState = reducerWithInitialState(
      initialState,
      actionCreators.changeTheme("mock")
    );

    expect(updatedState.theme).toEqual("mock");
  });

  test("changes the language", () => {
    const updatedState = reducerWithInitialState(
      initialState,
      actionCreators.changeLanguage("mock")
    );

    expect(updatedState.language).toEqual("mock");
  });

  test("imports all settings when available", () => {
    const updatedState = reducerWithInitialState(
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
    const updatedState = reducerWithInitialState(
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
