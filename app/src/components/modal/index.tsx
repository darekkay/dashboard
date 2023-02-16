import React from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Property } from "csstype";

import { IS_TEST } from "common/environment";
import Button from "components/button";
import Icon from "components/icon";

if (!IS_TEST) {
  // bind modal to the root app element
  ReactModal.setAppElement("#root");
} else {
  // create a mock modal root
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.append(modalRoot);
  ReactModal.setAppElement("#modal-root");
}

const Modal = ({
  headline,
  maxWidth = "600px",
  closeModal,
  renderFooter,
  children,
  ...rest
}: Props) => {
  const { t } = useTranslation();
  return (
    <ReactModal
      onRequestClose={closeModal}
      overlayClassName="fixed inset-0 z-30 flex justify-center items-center p-3 md:p-8 backdrop"
      className="w-full my-8 mx-auto text-default bg-default border rounded outline-none shadow-xl max-h-full overflow-auto"
      contentLabel={headline}
      style={{
        content: {
          maxWidth,
        },
      }}
      {...rest}
    >
      {/* Modal header */}
      <div
        className={clsx("flex px-6", {
          "py-3": !headline,
          "py-6 border-bottom bg-offset": headline,
        })}
      >
        {headline && <h2 className="text-4 font-bold">{headline}</h2>}
        <Button
          variant="unstyled"
          size="small"
          outline
          border={false}
          className="ml-auto"
          onClick={closeModal}
        >
          <div className="sr-only">{t("common.close")}</div>
          <Icon name="times" />
        </Button>
      </div>

      {/* Modal content */}
      <div className="modal-content p-6">{children}</div>

      {/* Modal footer */}
      {renderFooter && (
        <div className="flex flex-col md:flex-row justify-end p-6 gap-6 border-top bg-offset text-right">
          {renderFooter()}
        </div>
      )}
    </ReactModal>
  );
};

export interface Props extends ReactModalProps {
  headline?: string;
  maxWidth?: Property.MaxWidth<string>;
  closeModal: () => void;
  renderFooter?: () => React.ReactNode;
  children: React.ReactNode;
}

export default Modal;
