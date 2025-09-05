import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function PieChartStatus({ indicators }) {
  const medium = indicators.totalEmployees - indicators.highPerformers - indicators.lowPerformers;

  const data = [
    { name: "Alto", value: indicators.highPerformers },
    { name: "Medio", value: medium },
    { name: "Bajo", value: indicators.lowPerformers },
  ];

  const COLORS = ["#003865", "#0095D9", "#FC4C02"];

  return (
    <div >
      <h3>Status</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%" cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
