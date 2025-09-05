import "@styles/Navbar.css";
import logo from "@assets/logo.png"
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdClose, IoMdHelpCircle } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoSettingsSharp } from "react-icons/io5";

export default function SideNavbar({ showNav, setShowNav }){
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState("Rendimiento");

      const menuItems = [
        { name: "Empleados", icon: <FaUser /> },
        { name: "Rendimiento", icon: <FaChartLine /> },
        { name: "Revisión", icon: <IoChatbubbleEllipsesSharp /> },
    ];

    const otherItems = [
        { name: "Ajustes", icon: <IoSettingsSharp /> },
        { name: "Usuarios", icon: <FaUserCircle /> },
        { name: "Ayuda", icon: <IoMdHelpCircle /> },
    ];

     // función para transformar nombres en paths
    const toPath = (name) => `/${name.toLowerCase()}`;

    return(
        <div>
            <aside className={`sidebar ${showNav ? "active" : ""}`}>

                <div className="sidebar-header">
                    <img src={logo} alt="logo" className="logo" />
                    <h1 className="logo-text">
                        <span className="logo-im">IM</span>
                        <span className="logo-progress">PROGRESS</span>
                    </h1>
                    <IoMdClose 
                    className="close-btn"
                    onClick={() => setShowNav(false)}
                    />
                </div>

                <h2>MENÚ</h2>
                <ul className="sidebar-list">
                    {menuItems.map((item) => {
                    const path = toPath(item.name);
                    const isActive = location.pathname === path;

                    return (
                        <li
                        key={item.name}
                        className={`sidebar-item ${isActive ? "active" : ""}`}
                        onClick={() => navigate(path)}
                        >
                        {item.icon}
                        <span>{item.name}</span>
                        </li>
                    );
                    })}
                </ul>

                <h2>OTROS</h2>
                <ul className="sidebar-list">
                    {otherItems.map((item) => {
                    const path = toPath(item.name);
                    const isActive = location.pathname === path;

                    return (
                        <li
                        key={item.name}
                        className={`sidebar-item ${isActive ? "active" : ""}`}
                        onClick={() => navigate(path)}
                        >
                        {item.icon}
                        <span>{item.name}</span>
                        </li>
                    );
                    })}
                </ul>
            
            </aside>                              
        </div>
    );
}