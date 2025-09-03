import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import '@styles/App.css'

//Pages
import Ajustes from '@pages/Ajustes';
import Ayuda from '@pages/Ayuda';
import Employees from '@pages/Employees';
import Rendimiento from '@pages/Rendimiento';
import Revision from '@pages/Revision';
import Usuarios from '@pages/Usuarios';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ajustes"      element={<Ajustes />} />
        <Route path="/ayuda"      element={<Ayuda />} />
        <Route path="/empleados"      element={<Employees />} />
        <Route path="/rendimiento"      element={<Rendimiento />} />
        <Route path="/revisión"      element={<Revision />} />
        <Route path="/usuarios"      element={<Usuarios />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
