import placeholderFoto from "@assets/user1.png";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { TbBaselineDensityMedium } from "react-icons/tb";

export default function StatusList({ title, color, empleados }) {
  // Función para traer los íconos según el status
  const getIcon = (title) => {
    if (title.includes("Alto")) return <MdOutlineKeyboardDoubleArrowUp className="status-icon high" />;
    if (title.includes("Medio")) return <TbBaselineDensityMedium className="status-icon medium" />;
    if (title.includes("Bajo")) return <RiArrowDownDoubleFill className="status-icon low" />;
    return null;
  };

  return (
    <div className="status-card">
      <h3 className="status-title">
        {title} {getIcon(title)}
      </h3>

      <ul>
        {empleados.map(emp => (
          <li key={emp.id} className="status-item">
            <img src={emp.foto || placeholderFoto} alt={emp.nombre} className="status-img" />
            <span className="status-name">{emp.nombre}</span>
            <span className="status-score">{(emp.performance * 100).toFixed(0)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
