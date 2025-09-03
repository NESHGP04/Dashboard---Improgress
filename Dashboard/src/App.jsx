import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import '@styles/App.css'

//Pages
import Employees from '@pages/Employees';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"      element={<Employees />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
