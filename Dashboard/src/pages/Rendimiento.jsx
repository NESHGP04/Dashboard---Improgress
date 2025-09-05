import Navbar from '@components/navbar/Navbar'
import Header from '@components/rendimiento/headerContainer'
import { useState } from "react";
import LineChart from "@components/otro/LineChart";
import PieChart from "@components/otro/PieChart";
import StatusList from "@components/otro/StatusList";

export default function Rendimiento(){
    const years = [2025, 2024, 2023, 2022, 2021];
    const [selectedYear, setSelectedYear] = useState(2025);
      const empleados = {
    alto: [
      { id: 1, nombre: "Alejandro Morales", score: 0.85 },
      { id: 2, nombre: "Rosio María Nájera", score: 0.83 },
      { id: 3, nombre: "Samuel Deluque", score: 0.81 },
    ],
    medio: [
      { id: 4, nombre: "Sebastián Gómez", score: 0.75 },
      { id: 5, nombre: "Luciana Caballeros", score: 0.73 },
    ],
    bajo: [
      { id: 6, nombre: "Macarena Sofía Mariscal", score: 0.64 },
    ]
  };

    return (
        <>
            <Navbar />
            <div className="rendimiento-container">
                <Header years={years} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
            
                <div className="charts-row">
                    <div className="chart-box"><LineChart /></div>
                    <div className="chart-box"><PieChart /></div>
                </div>
            
                <div className="status-row">
                    <StatusList title="Status Alto" color="#003865" empleados={empleados.alto} />
                    <StatusList title="Status Medio" color="#0095D9" empleados={empleados.medio} />
                    <StatusList title="Status Bajo" color="#FC4C02" empleados={empleados.bajo} />
                </div>
            </div>
        </>
    )
}