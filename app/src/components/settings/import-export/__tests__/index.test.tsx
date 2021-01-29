import React from "react";

import {
  act,
  fireEvent,
  render,
  renderConnected,
  screen,
} from "common/testing";
import { stateProps } from "common/utils/mock";

import ImportExportConnected, { ImportExport } from "../index";

const createFile = (json: object) => {
  const fileContent = JSON.stringify(json);

  const file = new File([fileContent], "dashboard.json", {
    type: "application/json",
  });

  // Strangely, the File/Blob API doesn't seem to provide the text() method in Node environment
  Object.defineProperty(file, "text", {
    get: function () {
      return async () => Promise.resolve(fileContent);
    },
  });

  return file;
};

describe("<ImportExport />", () => {
  test("renders without errors", () => {
    renderConnected(<ImportExportConnected />);
    expect(
      screen.getByRole("link", { name: "common.download" })
    ).toBeInTheDocument();
  });

  test("imports valid files", async () => {
    const importStateSpy = jest.fn();
    render(<ImportExport state={stateProps} importState={importStateSpy} />);
    const fileInput = screen.getByLabelText("config.data.restore.default");

    const file = createFile(stateProps);

    await act(async () => {
      // eslint-disable-next-line testing-library/no-await-sync-events
      await fireEvent.drop(fileInput, { target: { files: [file] } });
    });

    expect(importStateSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByText("config.data.restore.success")).toBeInTheDocument();
    expect(
      screen.queryByText("config.data.restore.error")
    ).not.toBeInTheDocument();
  });

  test("doesn't import invalid files", async () => {
    const importStateSpy = jest.fn();
    render(<ImportExport state={stateProps} importState={importStateSpy} />);
    const fileInput = screen.getByLabelText("config.data.restore.default");

    const file = createFile({ a: 2 });

    await act(async () => {
      // eslint-disable-next-line testing-library/no-await-sync-events
      await fireEvent.drop(fileInput, { target: { files: [file] } });
    });

    expect(importStateSpy).toHaveBeenCalledTimes(0);
    expect(screen.getByText("config.data.restore.error")).toBeInTheDocument();
    expect(
      screen.queryByText("config.data.restore.success")
    ).not.toBeInTheDocument();
  });

  test("rejects non-JSON files", async () => {
    const importStateSpy = jest.fn();
    render(<ImportExport state={stateProps} importState={importStateSpy} />);
    const fileInput = screen.getByLabelText("config.data.restore.default");

    const imageFile = new File([], "dashboard.png", {
      type: "image/png",
    });

    await act(async () => {
      // eslint-disable-next-line testing-library/no-await-sync-events
      await fireEvent.drop(fileInput, { target: { files: [imageFile] } });
    });

    expect(importStateSpy).toHaveBeenCalledTimes(0);
    expect(
      screen.queryByText("config.data.restore.error")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("config.data.restore.success")
    ).not.toBeInTheDocument();
  });
});
