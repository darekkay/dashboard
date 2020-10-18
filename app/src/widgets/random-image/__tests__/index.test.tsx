import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import RandomImage from "../index";

describe("<RandomImage />", () => {
  test("renders without errors", () => {
    render(
      <RandomImage
        {...widgetProps}
        id="random-image-mock-image"
        imageUrl="https://images.unsplash.com/photo-1603047006470-30f6b1196129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"
        authorName="Ingmar"
        authorUrl="https://unsplash.com/@ingmarr"
      />
    );
    expect(
      screen.getByRole("TODO", { name: /TODO text/i })
    ).toBeInTheDocument();
  });
});
