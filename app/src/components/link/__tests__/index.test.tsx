import React from "react";
import { render, screen } from "common/testing";

import Link from "../index";

describe("<Link />", () => {
  test("renders without errors", () => {
    render(<Link href="#">Link</Link>);
    const link = screen.getByRole("link", { name: /link/i });
    expect(link).toBeInTheDocument();
  });

  test("external links open in a new tab", () => {
    const { rerender } = render(
      <Link href="#" external={false}>
        Link content
      </Link>
    );

    const link = screen.getByRole("link", { name: /link content/i });
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");

    rerender(<Link external>Link</Link>);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
