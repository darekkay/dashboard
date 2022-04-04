import ReactDOM from "react-dom/client";

describe("index", () => {
  test("renders the app", () => {
    // See also: https://stackoverflow.com/questions/43044696/test-a-create-react-app-index-js-file

    const reactRenderSpy = jest.fn();
    jest.spyOn(ReactDOM, "createRoot").mockImplementation(() => ({
      render: reactRenderSpy,
      unmount: () => null,
    }));

    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.append(root);

    const themeToggle = document.createElement("theme-toggle");
    themeToggle.setAttribute("id", "theme-toggle");
    document.body.append(themeToggle);

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("../index");
    expect(reactRenderSpy).toHaveBeenCalledTimes(1);
  });
});

// required for TS
