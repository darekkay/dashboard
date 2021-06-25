import React, { Suspense, useState } from "react";
import Measure from "react-measure";
import isEmpty from "lodash/isEmpty";

import Icon from "components/icon";
import WidgetError from "components/widget-error";
import Loading from "components/loading";
import widgets, { ValueUpdateAction } from "widgets";
import { TriggerUpdateAction, WidgetMeta } from "components/widget/duck";
import { Dimensions } from "components/widget";
import { getWidgetStatusDisplay } from "components/widget-status-display";
import withErrorHandling, {
  State as ErrorProps,
} from "common/hoc/withErrorHandling";
import { WidgetType } from "widgets/list";

const initialDimensions: Dimensions = { width: 1, height: 1 };

export const WidgetContent: React.FC<Props & ErrorProps> = ({
  id,
  type,
  hasRenderError,
  headline,
  data,
  options,
  meta,
  setOptions,
  setData,
  triggerUpdate,
}) => {
  const [dimensions, setDimensions] = useState<Dimensions>(initialDimensions);

  if (hasRenderError) {
    return <WidgetError />;
  }

  const widgetStatusDisplay = getWidgetStatusDisplay({
    meta,
    isDataEmpty: isEmpty(data),
  });

  return (
    <>
      {headline && (
        <h2
          id={`widget-${id}-headline`}
          className="flex items-center justify-start m-0 py-2 px-3 text-2 font-semibold text-offset tracking-tight"
        >
          {meta.headlineIcon && (
            <Icon
              name={meta.headlineIcon}
              position="left"
              className="flex-shrink-0"
            />
          )}
          <span className="truncate">{headline}</span>
        </h2>
      )}

      <Measure
        bounds
        onResize={(contentRect) => {
          setDimensions(contentRect?.bounds ?? initialDimensions);
        }}
      >
        {({ measureRef }) => (
          <div
            ref={measureRef}
            className="flex flex-col items-center justify-center h-full overflow-hidden rounded"
          >
            <Suspense fallback={<Loading type="skeleton" />}>
              {React.createElement(widgets[type].Component, {
                ...data,
                ...options,
                id,
                type,
                setOptions,
                setData,
                triggerUpdate,
                widgetStatusDisplay,
                meta: {
                  ...meta,
                  dimensions,
                },
              })}
            </Suspense>
          </div>
        )}
      </Measure>
    </>
  );
};

export interface Props {
  id: string;
  type: WidgetType;
  headline?: string;
  data: Record<string, any>;
  options: Record<string, any>;
  meta: WidgetMeta;
  setOptions: ValueUpdateAction;
  setData: ValueUpdateAction;
  triggerUpdate: (action: TriggerUpdateAction) => void;
}

export default withErrorHandling(WidgetContent);
