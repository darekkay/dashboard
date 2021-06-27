import React from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { Property } from "csstype";

import Button from "components/button";
import Icon from "components/icon";

if (process.env.NODE_ENV !== "test") {
  // bind modal to the root app element
  ReactModal.setAppElement("#root");
} else {
  // create a mock modal root
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  document.body.append(modalRoot);
  ReactModal.setAppElement("#modal-root");
}

const Modal: React.FC<Props> = ({
  headline,
  maxWidth = "600px",
  closeModal,
  renderFooter,
  children,
  ...rest
}) => {
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
        className={cn("flex px-6", {
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
          <Icon name="times" alt={t("common.close")} />
        </Button>
      </div>

      {/* Modal content */}
      <div className="modal-content p-6">{children}</div>

      {/* Modal footer */}
      {renderFooter && (
        <div className="px-6 pb-6 pt-6 md:pt-0 md:space-x-6 space-y-6 border-top bg-offset text-right">
          {/* Dummy element to make "space" work even with only one footer element */}
          <span />
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
