import React from "react";
import { render, screen, fireEvent, act } from "common/testing";

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

    await act(async () => {
      // Somehow this one broke on user-event@12.0.0
      // userEvent.upload(fileInput, file);
      await fireEvent.change(fileInput, { target: { files: [file] } });
    });

    expect(screen.getByText(/chucknorris\.png/)).toBeInTheDocument();
  });
});
