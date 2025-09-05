import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Bajo", value: 15 },
  { name: "Alto", value: 23 },
  { name: "Medio", value: 62 },
];

const COLORS = ["#FC4C02", "#003865", "#008CFF"];

export default function PieChartStatus() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%" cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
