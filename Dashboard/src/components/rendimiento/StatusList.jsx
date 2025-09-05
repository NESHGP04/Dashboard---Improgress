import placeholderFoto from "@assets/user1.png";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { TbBaselineDensityMedium } from "react-icons/tb";

export default function StatusList({ title, color, empleados }) {
  return (
    <div className="status-card">
      <h3 className="status-title" style={{ color }}>{title}</h3>
      <ul>
        {empleados.map(emp => (
          <li key={emp.id} className="status-item">
            <img src={emp.foto || placeholderFoto} alt={emp.nombre} className="status-img" />
            <span className="status-name">{emp.nombre}</span>
            <span className="status-score">{emp.score}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}