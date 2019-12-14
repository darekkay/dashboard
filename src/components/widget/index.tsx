import React, { memo, Suspense, useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import withErrorHandling, {
  State as ErrorProps
} from "common/hoc/withErrorHandling";
import Button, { ButtonVariant, ButtonSize } from "components/button";
import Icon from "components/icon";
import Modal from "components/modal";
import widgets, { ValueUpdateAction } from "widgets";

import Loading from "../loading";

import makeSelectWidget from "./selectors";
import { actionCreators, WidgetMeta } from "./duck";

export interface Props {
  id: string;
  type: string;
  options: { [key: string]: any };
  data: { [key: string]: any };
  meta: WidgetMeta;
  setOptions: ValueUpdateAction;
  setData: ValueUpdateAction;
  triggerUpdate: (id: string) => void;
  removeWidgetFromLayout: (id: string) => void;
  isLayoutEditable: boolean;
  className?: string;
  /** Required to inject the resize handle */
  children?: React.ReactNode;
}

/** Single widget within the dashboard */
export const Widget: React.FC<Props & ErrorProps> = memo(props => {
  const {
    id,
    type,
    options,
    data,
    meta,
    hasError,
    setOptions,
    setData,
    triggerUpdate,
    removeWidgetFromLayout,
    isLayoutEditable,
    className,
    children,
    ...rest
  } = props;

  const isWidgetConfigurable = widgets[type].configurable;

  const { t } = useTranslation();
  const headline = t(`widget.${type}.headline`, options);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div
      className={cn(
        "visibility-trigger",
        "flex",
        "flex-col",
        "border",
        "rounded",
        "overflow-hidden",
        "bg-color-panel",
        "relative",
        {
          error: hasError
        },
        className
      )}
      {...rest}
    >
      {headline && (
        <h3
          id={`widget-${id}-headline`}
          className="m-0 py-1 px-2 text-1 font-normal"
        >
          {headline}
        </h3>
      )}
      {hasError && "» Error «"}
      {!hasError && (
        <div className="flex flex-col items-center justify-center h-full">
          <Suspense fallback={<Loading type="skeleton" />}>
            {React.createElement(widgets[type].Component, {
              id,
              setOptions,
              setData,
              triggerUpdate,
              meta,
              ...options,
              ...data
            })}
          </Suspense>
        </div>
      )}
      {isLayoutEditable && (
        <>
          <div className="absolute inset-0 bg-color-dim" />
          <div className="absolute right-0 top-0 m-2">
            <Button
              size={ButtonSize.Small}
              variant={ButtonVariant.Unstyled}
              aria-label={t(`widget.common.remove`, {
                widget: t(`widget.${type}.name`)
              })}
              onClick={() => removeWidgetFromLayout(id)}
            >
              <Icon name="times" />
            </Button>
          </div>
        </>
      )}
      {!isLayoutEditable && isWidgetConfigurable && (
        <div className="absolute right-0 top-0 m-2">
          <Button
            size={ButtonSize.Small}
            variant={ButtonVariant.Unstyled}
            className="visibility-target bg-color-panel"
            aria-label={t(`widget.common.configuration`, {
              widget: t(`widget.${type}.name`)
            })}
            onClick={openModal}
          >
            <Icon name="cog" />
          </Button>
        </div>
      )}
      <Modal
        headline={t(`widget.common.configuration`, {
          widget: t(`widget.${type}.name`)
        })}
        closeModal={closeModal}
        isOpen={isModalOpen}
      >
        {isWidgetConfigurable && (
          <Suspense fallback={<Loading />}>
            {React.createElement(widgets[type].Configuration, {
              id,
              setOptions,
              options
            })}
          </Suspense>
        )}
        <div className="mt-6 text-right">
          <Button
            className="w-full md:w-auto md:ml-5 mt-5"
            onClick={closeModal}
          >
            {t("common.close")}
          </Button>
        </div>
      </Modal>
      {children}
    </div>
  );
});

const mapStateToProps = (id: string) => makeSelectWidget(id);

export default (id: string) =>
  connect(
    mapStateToProps(id),
    actionCreators // NICE: bind id to action creators
  )(withErrorHandling(Widget));
