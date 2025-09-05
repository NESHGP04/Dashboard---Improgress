import { useState } from "react";
import placeholderFoto from "@assets/user1.png";
import Navbar from '@components/navbar/Navbar'
import Header from '@components/rendimiento/headerContainer'
import LineChart from "@components/rendimiento/LineChart";
import PieChart from "@components/rendimiento/PieChart";
import StatusList from "@components/rendimiento/StatusList";
import dashboardData from "../../JSON/employeesData.json";
import '@styles/Rendimiento.css';

export default function Rendimiento(){
    const { indicatorsData, graphData, tableData } = dashboardData;
    const [showNav, setShowNav] = useState(false); // estado para el sidebar

    const years = [2025, 2024, 2023, 2022, 2021];
    const [selectedYear, setSelectedYear] = useState(2025);

    // Arrays para StatusList dinámicamente
    const empleados = {
    alto: tableData
        .filter((emp) => emp.status === "High")
        .map((emp) => ({
        id: emp.id,
        nombre: emp.name,
        performance: emp.performance,
        status: emp.status,
        foto: placeholderFoto,
        })),
    medio: tableData
        .filter((emp) => emp.status === "Medium")
        .map((emp) => ({
        id: emp.id,
        nombre: emp.name,
        performance: emp.performance,
        status: emp.status,
        foto: placeholderFoto,
        })),
    bajo: tableData
        .filter((emp) => emp.status === "Low")
        .map((emp) => ({
        id: emp.id,
        nombre: emp.name,
        performance: emp.performance,
        status: emp.status,
        foto: placeholderFoto,
        })),
    };

    return (
        <>
            <Navbar showNav={showNav} setShowNav={setShowNav} />
            <div className="rendimiento-container">
                <Header 
                    years={years} 
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                    indicators={indicatorsData}
                />
            
                <div className="charts-row">
                    <div className="chart-box"><LineChart data={graphData}/></div>
                    <div className="chart-box"><PieChart indicators={indicatorsData} /></div>
                </div>
            
                <div className="status-row">
                    <StatusList title="Status Alto" color="#003865" empleados={empleados.alto} />
                    <StatusList title="Status Medio" color="#0095D9" empleados={empleados.medio} />
                    <StatusList title="Status Bajo" color="#FC4C02" empleados={empleados.bajo} />
                </div>
            </div>
        </>
    );
}