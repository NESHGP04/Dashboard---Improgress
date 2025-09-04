import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import "@styles/User.css";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

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
            <li>Ajustes</li>
            <li>Cerrar sesión</li>
            </ul>
        )}
        </div>

        <IoMdNotifications className="notifications-icon" />
    </div>
    );
};

export default UserDropdown;
