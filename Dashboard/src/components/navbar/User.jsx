import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import "@styles/User.css";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Cierra el dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navega a Ajustes
  const handleNavigate = (path) => {
    setOpen(false); // cerrar dropdown
    navigate(path);
  };

  return (
    <div className="user-container">
        <div className="user-dropdown" ref={dropdownRef}>
        <button className="user-button" onClick={() => setOpen(!open)}>
            <div className="user-info">
            <div className="user-avatar"></div>
            <span className="user-name">Juan Pérez</span>
            <IoIosArrowDown className="arrow" />
            </div>
        </button>
        {open && (
            <ul className="dropdown-menu">
            <li onClick={() => handleNavigate("/ajustes")}>Ajustes</li>
            <li>Cerrar sesión</li>
            </ul>
        )}
        </div>

        <IoMdNotifications className="notifications-icon" />
    </div>
    );
};

export default UserDropdown;
