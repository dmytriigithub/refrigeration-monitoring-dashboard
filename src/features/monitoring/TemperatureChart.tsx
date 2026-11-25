import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

import type { TemperatureReading } from "./types";

interface TemperatureChartProps {
  readings: TemperatureReading[];
}

function TemperatureChart({ readings }: TemperatureChartProps) {
  const chartData = readings.map((reading) => ({
    time: new Date(reading.timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    temperature: reading.temperature,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />

        <XAxis dataKey="time" />

        <YAxis
          domain={["auto", "auto"]}
          width={65}
          tickFormatter={(value) => Number(value).toFixed(1)}
        />

        <Tooltip formatter={(value) => [`${value} °C`, "Temperature"]} />
        <ReferenceLine
          y={-15}
          stroke="#ED6C02"
          strokeDasharray="5 5"
          label={{ value: "Warning", position: "insideTopRight" }}
          ifOverflow="extendDomain"
        />

        <ReferenceLine
          y={-12}
          stroke="#D32F2F"
          strokeDasharray="5 5"
          label={{ value: "Critical", position: "insideTopRight" }}
          ifOverflow="extendDomain"
        />

        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#1565C0"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TemperatureChart;
