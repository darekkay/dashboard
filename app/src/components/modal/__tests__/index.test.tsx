import React from "react";

import { render, screen } from "common/testing";

import Modal, { Props as ModalProps } from "../index";

describe("<Modal />", () => {
  const renderModal = (props: Partial<ModalProps>) =>
    render(
      <Modal
        isOpen
        closeModal={() => null}
        {...props}
        // used for tests only
        ariaHideApp={false}
      >
        Content
      </Modal>
    );

  test("renders a headline when provided", () => {
    renderModal({ headline: "Modal headline" });
    expect(
      screen.getByRole("heading", { name: /modal headline/i })
    ).toBeInTheDocument();
  });

  test("doesn't render a headline when not provided", () => {
    renderModal({});
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  test("renders a footer when provided", () => {
    // eslint-disable-next-line react/display-name
    renderModal({ renderFooter: () => <div>footer</div> });
    expect(screen.getByText("footer")).toBeInTheDocument();
  });
});
