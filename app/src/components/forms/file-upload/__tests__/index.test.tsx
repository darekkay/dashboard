import React from "react";

import { render, screen, userEvent, act } from "common/testing";

import FileUpload from "../index";

describe("<FileUpload />", () => {
  test("renders without errors", () => {
    render(<FileUpload label="upload file" />);
    expect(screen.getByText(/upload file/i)).toBeInTheDocument();
  });

  // Based on: https://github.com/kentcdodds/react-testing-library-examples/blob/master/src/__tests__/upload-file.js
  test("shows the uploaded file name after the user uploads a file", async () => {
    render(<FileUpload label="upload file" />);

    const fileInput = screen.getByLabelText(/upload file/i);

    const file = new File(["(⌐□_□)"], "chucknorris.png", {
      type: "image/png",
    });

    // TODO: check why await is required, see also import-export test
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      // eslint-disable-next-line testing-library/no-await-sync-events
      await userEvent.upload(fileInput, file);
    });

    const uploadedImage = await screen.findByText(/chucknorris\.png/);
    expect(uploadedImage).toBeInTheDocument();
  });
});
