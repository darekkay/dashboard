import React, { memo } from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";
import { useTranslation } from "react-i18next";
import { MaxWidthProperty } from "csstype";

import Button, { ButtonSize, ButtonVariant } from "components/button";
import Icon from "components/icon";

if (process.env.NODE_ENV !== "test") {
  // bind modal to the root app element
  ReactModal.setAppElement("#root");
}

const Modal = memo(
  ({ headline, maxWidth = "600px", closeModal, children, ...rest }: Props) => {
    const { t } = useTranslation();
    return (
      <ReactModal
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 flex justify-center items-center p-2 backdrop"
        className="w-full my-8 mx-auto p-6 text-color-default bg-color-default border rounded outline-none overflow-auto"
        contentLabel={headline}
        style={{
          content: {
            maxWidth
          }
        }}
        {...rest}
      >
        <div className="flex">
          {headline && <h2 className="text-3 mb-6">{headline}</h2>}
          <Button
            variant={ButtonVariant.Unstyled}
            size={ButtonSize.Small}
            className="ml-auto"
            onClick={closeModal}
          >
            <Icon name="times" alt={t("common.close")} />
          </Button>
        </div>
        {children}
      </ReactModal>
    );
  }
);

export interface Props extends ReactModalProps {
  headline?: string;
  maxWidth?: MaxWidthProperty<string>;
  closeModal: () => void;
  children: React.ReactNode;
}

export default Modal;
