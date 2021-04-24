import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChart: React.FC<Props> = ({
  data,
  dataKeyX = "x",
  dataKeyY = "y",
  className,
}) => {
  return (
    <ResponsiveContainer className={className} width="100%" height="100%">
      <RechartsLineChart data={data} margin={{ right: 40 }}>
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis dataKey={dataKeyX} tick={{ fontSize: "1.4rem" }} height={25} />
        <YAxis tick={{ fontSize: "1.4rem" }} />
        <Tooltip />
        <Line
          type="linear"
          dataKey={dataKeyY}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export interface Props {
  data: any[];
  dataKeyX?: string;
  dataKeyY?: string;
  className?: string;
}

export default LineChart;
