import React, { memo, Suspense, useState } from "react";
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
    const [values, setValues] = useState(options);

    const onCancel = () => {
      setValues(options);
      closeModal();
    };
    const onSave = () => {
      setOptions({ id, values });
      closeModal();
    };

    return (
      <Modal
        headline={t(`widget.common.configuration`, {
          widget: t(`widget.${type}.name`)
        })}
        closeModal={onCancel}
        isOpen={isModalOpen}
      >
        <Suspense fallback={<Loading />}>
          {React.createElement(configuration, {
            id,
            setOptions: modalValues => {
              setValues({ ...values, ...modalValues });
            },
            options: values
          })}
        </Suspense>

        <div className="mt-6 text-right">
          <Button
            className="w-full md:w-auto md:ml-5 mt-5"
            outline
            onClick={onCancel}
          >
            {t("common.cancel")}
          </Button>
          <Button className="w-full md:w-auto md:ml-5 mt-5" onClick={onSave}>
            {t("common.save")}
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
