import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { mes: "01", actual: 40, pasado: 45 },
  { mes: "02", actual: 35, pasado: 38 },
  { mes: "03", actual: 50, pasado: 47 },
  { mes: "04", actual: 48, pasado: 46 },
  { mes: "05", actual: 42, pasado: 44 },
  { mes: "06", actual: 55, pasado: 48 },
];

export default function LineChartRend() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="actual" stroke="#FC4C02" name="Últimos 6 meses" />
        <Line type="monotone" dataKey="pasado" stroke="#ccc" name="Año pasado" />
      </LineChart>
    </ResponsiveContainer>
  );
}
