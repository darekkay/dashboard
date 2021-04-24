import React from "react";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import WidgetUnconfigured from "components/widget-unconfigured";
import WidgetError from "components/widget-error";
import LineChart from "components/charts/line-chart";
import Loading from "components/loading";

import { WidgetProps } from "../index";
import { Props as ConfigurationProps } from "./configuration";
import { widgetType } from "./properties";

export { saga } from "./sagas";

const Chart: React.FC<Props> = ({
  id,
  url,
  dataPath,
  dataKeyX,
  dataKeyY,
  meta,
  triggerUpdate,
  ...rest
}) => {
  useTriggerUpdate({ id, params: { url }, meta, triggerUpdate }, [url]);

  if (isEmpty(url) || isEmpty(dataPath))
    return <WidgetUnconfigured type={widgetType} />;

  const data = get(rest, dataPath as string);

  if (!data || !Array.isArray(data)) {
    if (meta.updateStatus === "pending") {
      return <Loading />;
    } else {
      return <WidgetError labelKey="widget.chart.error.noArrayData" />;
    }
  }

  // TODO: make reverse configurable
  return (
    <LineChart
      className="mt-3 mb-2"
      data={data}
      dataKeyX={dataKeyX}
      dataKeyY={dataKeyY}
    />
  );
};

interface Props extends WidgetProps, ConfigurationProps {
  url: string;
}

export default Chart;
