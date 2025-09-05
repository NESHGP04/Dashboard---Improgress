import '@styles/Rendimiento.css'
import { FaArrowDown } from "react-icons/fa";

export default function headerContainer({ years, selectedYear, setSelectedYear }){
    return(
    <>
        <h1 className='titulo rend'> Panel de Rendimiento </h1>
        <div className="header-row">
             <h2 className='subtitulo'>Rendimiento Promedio</h2>
            <button className='report-btn'>
                    Ver Reporte
            </button>
        </div>    
        <div>
            <select 
                value={selectedYear}  
                className='select-year' 
                onChange={(e) => setSelectedYear(e.target.value)} 
            >
                <option value="" disabled>Selecciona un año</option>
                    {years.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
            </select>
        </div>

        <div>
            <FaArrowDown className='arrow-icon'/>
            <span className='span-porcentaje num'>2.21%</span>
            <span className='span-porcentaje'>vs. año pasado</span>
        </div>
    </>
    )
}