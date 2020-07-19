import React from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";
import { useTranslation } from "react-i18next";
import { MaxWidthProperty } from "csstype";

import Button from "components/button";
import Icon from "components/icon";

if (process.env.NODE_ENV !== "test") {
  // bind modal to the root app element
  ReactModal.setAppElement("#root");
} else {
  // create a mock modal root
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
  ReactModal.setAppElement("#modal-root");
}

const Modal: React.FC<Props> = ({
  headline,
  maxWidth = "600px",
  closeModal,
  children,
  ...rest
}) => {
  const { t } = useTranslation();
  return (
    <ReactModal
      onRequestClose={closeModal}
      overlayClassName="fixed inset-0 z-30 flex justify-center items-center p-2 backdrop"
      className="w-full my-8 mx-auto p-6 text-color-default bg-color-panel border rounded outline-none max-h-full overflow-auto"
      contentLabel={headline}
      style={{
        content: {
          maxWidth,
        },
      }}
      {...rest}
    >
      <div className="flex">
        {headline && <h2 className="text-3 font-bold mb-6">{headline}</h2>}
        <Button
          variant="unstyled"
          size="small"
          outline
          border={false}
          className="ml-auto"
          onClick={closeModal}
        >
          <Icon name="times" alt={t("common.close")} />
        </Button>
      </div>
      {children}
    </ReactModal>
  );
};

export interface Props extends ReactModalProps {
  headline?: string;
  maxWidth?: MaxWidthProperty<string>;
  closeModal: () => void;
  children: React.ReactNode;
}

export default Modal;
