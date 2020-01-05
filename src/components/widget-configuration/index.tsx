import React, { memo, Suspense } from "react";
import { useTranslation } from "react-i18next";

import Button from "components/button";
import Modal from "components/modal";
import Loading from "components/loading";
import { ConfigurationProps, ValueUpdateAction } from "widgets";

const WidgetConfiguration: React.FC<Props> = memo(
  ({
    id,
    type,
    configuration,
    options,
    setOptions,
    closeModal,
    isModalOpen
  }) => {
    const { t } = useTranslation();
    return (
      <Modal
        headline={t(`widget.common.configuration`, {
          widget: t(`widget.${type}.name`)
        })}
        closeModal={closeModal}
        isOpen={isModalOpen}
      >
        <Suspense fallback={<Loading />}>
          {React.createElement(configuration, {
            id,
            setOptions,
            options
          })}
        </Suspense>

        <div className="mt-6 text-right">
          <Button
            className="w-full md:w-auto md:ml-5 mt-5"
            onClick={closeModal}
          >
            {t("common.close")}
          </Button>
        </div>
      </Modal>
    );
  }
);

export interface Props {
  id: string;
  type: string;
  options: { [key: string]: any };
  setOptions: ValueUpdateAction;
  isModalOpen: boolean;
  closeModal: () => void;
  configuration: React.ComponentClass<ConfigurationProps, any>;
}

export default WidgetConfiguration;
