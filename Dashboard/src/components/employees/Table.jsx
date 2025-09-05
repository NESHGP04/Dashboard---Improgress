// src/components/employees/Table.jsx
import { useState } from 'react';
import placeholderFoto from '@assets/logo.png';
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { TbBaselineDensityMedium } from "react-icons/tb";
import user1 from '@assets/user1.png';
import user2 from '@assets/user2.png';
import user3 from '@assets/user3.png';
import user4 from '@assets/user4.png';
import '@styles/Employees.css';

export default function Table({ rows = [] }) {
    const [search, setSearch] = useState('');
    const fotos = [user1, user2, user3, user4];

  // Filtra empleados por nombre
  const filteredRows = search
    ? rows.filter(emp =>
        emp.nombre?.toLowerCase().includes(search.toLowerCase())
      )
    : rows;

    // función para renderizar ícono según status
    const renderStatusIcon = (status) => {
        switch (status?.toLowerCase()) {
        case "high":
            return <MdOutlineKeyboardDoubleArrowUp className="status-icon high" />;
        case "low":
            return <RiArrowDownDoubleFill className="status-icon low" />;
        case "medium":
            return <TbBaselineDensityMedium className="status-icon medium" />;
        default:
            return null;
        }
    };

  return (
    <div className="table-container">
        <div>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar por nombre..."
                className="searchbar ml-1"
            />
            <IoSearchSharp className="icon"/>
        </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>   </th>
            <th>Nombre Completo</th>
            <th>Departamento</th>
            <th>Rendimiento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((emp, i) => (
            <tr key={emp.id} className='employee-row'>
              
              <td >
                <img
                  src={fotos[i % fotos.length]}
                  alt={emp.nombre}
                  className="empleado-img"
                />
              </td>
              <td>{emp.nombre}</td>
              <td>{emp.departamento}</td>
              <td>{emp.rendimiento}</td>
              <td>{renderStatusIcon(emp.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
