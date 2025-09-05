import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function LineChartRend({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250} >
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="averagePerformance" stroke="#FC4C02" name="Últimos 6 meses" />
        <Line type="monotone" dataKey="pasado" stroke="#ccc" name="Año pasado" />
      </LineChart>
    </ResponsiveContainer>
  );
}
