// src/components/employees/Table.jsx
import { useState } from 'react';
import placeholderFoto from '@assets/logo.png';
import { IoSearchSharp } from "react-icons/io5";
import '@styles/Employees.css';

export default function Table({ rows = [] }) {
  const [search, setSearch] = useState('');

  // Filtra empleados por nombre
  const filteredRows = search
    ? rows.filter(emp =>
        emp.nombre?.toLowerCase().includes(search.toLowerCase())
      )
    : rows;

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
          {filteredRows.map(emp => (
            <tr key={emp.id}>
              <td>
                <img
                  src={emp.foto || placeholderFoto}
                  alt={emp.nombre}
                  className="empleado-img"
                />
              </td>
              <td>{emp.nombre}</td>
              <td>{emp.departamento}</td>
              <td>{emp.rendimiento}</td>
              <td>{emp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
