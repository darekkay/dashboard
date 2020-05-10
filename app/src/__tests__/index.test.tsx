import ReactDOM from "react-dom";

describe("index", () => {
  test("renders the app", () => {
    // See also: https://stackoverflow.com/questions/43044696/test-a-create-react-app-index-js-file

    const reactRenderSpy = jest
      .spyOn(ReactDOM, "render")
      .mockImplementation(() => undefined);

    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);

    const themeToggle = document.createElement("theme-toggle");
    themeToggle.setAttribute("id", "theme-toggle");
    document.body.appendChild(themeToggle);

    require("../index");
    expect(reactRenderSpy).toHaveBeenCalledTimes(1);
  });
});

export {}; // required for TS
