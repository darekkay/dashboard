import "jest";

describe("index", () => {
  it("renders without crashing", () => {
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);

    const themeToggle = document.createElement("theme-toggle");
    themeToggle.setAttribute("id", "theme-toggle");
    document.body.appendChild(themeToggle);

    require("../index");
    // @ts-ignore
    expect(document.getElementById("root")._reactRootContainer).toBeTruthy();
  });
});
