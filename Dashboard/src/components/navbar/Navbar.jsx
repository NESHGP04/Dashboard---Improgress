import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoIosMenu, IoMdNotifications } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import "@styles/Navbar.css";
import logo from "@assets/logo.png"
import Sidebar from "./SideNavbar"
import User from "./User"

const Navbar = () => {
    const [ showNav, setShowNav] = useState (false);

  return (
    <div className="layout">
      {/* Upper Navbar */}
      <header className="main-header">
  <nav className="main-nav">

    {/* Menú + Logo + Nombre */}
    <div className="logo-wrapper">
      <IoIosMenu 
        className="menu-icon"
        onClick={() => setShowNav(!showNav)}
      />
      { !showNav && (
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="logo-text">
            <span className="logo-im">IM</span>
            <span className="logo-progress">PROGRESS</span>
          </h1>
        </div>
      )}
    </div>

    {/* Usuario */}
    <div>
      <User />
    </div>
  </nav>
</header>

      {/* Sidebar*/}
      <Sidebar showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default Navbar;
