import { useState, useEffect } from 'react';
import Navbar from '@components/navbar/Navbar'
import Table from '@components/employees/Table'
import placeholderFoto from '@assets/user1.png';

export default function Employees(){
    const [rows, setRows] = useState([]);
    
    //Trae data de JSON
        useEffect(() => {
        fetch('../../JSON/employeesData.json')
          .then(res => res.json())
          .then(data => {
            // Mapeamos tableData para que coincida con los nombres de columnas de Table
            const employees = data.tableData.map(emp => ({
              id: emp.id,
              nombre: emp.name,
              departamento: emp.department,
              rendimiento: emp.performance,
              status: emp.status,
              foto: placeholderFoto // reemplazar DESP
            }));
            setRows(employees);
          })
          .catch(err => console.error('Error al cargar empleados:', err));
      }, []);

    return (
        <div>
            <Navbar />
            <h1 className='titulo'> Panel de Empleados </h1>
            <Table rows={rows} />
            <h2>{rows.length} Empleados en total</h2>
        </div>
    )
}