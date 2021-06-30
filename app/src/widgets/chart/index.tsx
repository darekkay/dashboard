import React from "react";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import LineChart from "components/charts/line-chart";
import WidgetError from "components/widget-error";
import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";

export { saga } from "./sagas";

const Chart: React.FC<Props> = ({
  id,
  type,
  url,
  dataPath,
  dataKeyX,
  dataKeyY,
  meta,
  triggerUpdate,
  widgetStatusDisplay,
  ...rest
}) => {
  useTriggerUpdate({ id, params: { url }, meta, triggerUpdate }, [url]);

  if (isEmpty(url) || isEmpty(dataPath))
    return <WidgetUnconfigured type={type} />;

  if (widgetStatusDisplay) return widgetStatusDisplay;

  const data = get(rest, dataPath);
  if (!Array.isArray(data))
    return <WidgetError labelKey="widget.chart.error.noArrayData" />;

  return (
    <LineChart
      className="mt-3 mb-2"
      data={data}
      dataKeyX={dataKeyX}
      dataKeyY={dataKeyY}
    />
  );
};

interface Props extends WidgetProps, WidgetOptions {
  url: string;

  // dynamic data
  [key: string]: any;
}

export default Chart;
