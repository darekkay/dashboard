import { render, screen } from "common/testing";

import Entry from "../entry";

describe("entry", () => {
  test("renders entry point", () => {
    render(<Entry />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
