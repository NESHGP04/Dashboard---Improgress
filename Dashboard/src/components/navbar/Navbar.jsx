import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import "@styles/Navbar.css";
import logo from "@assets/logo.png"
import Sidebar from "./SideNavbar"

const Navbar = () => {
    const [ showNav, setShowNav] = useState (false);

  return (
    <div className="layout">
      {/* Upper Navbar */}
      <header className="main-header">
        <nav className="main-nav">

          <div className="nav-item"> 
            <IoIosMenu 
                onClick={()=> {
                    setShowNav(!showNav)
                }}
            /> 
          </div>

          <div className="nav-item">
            <div className="sidebar-header">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="logo-text">
                    <span className="logo-im">IM</span>
                    <span className="logo-progress">PROGRESS</span>
                </h1>
            </div>
          </div>

          <div className="nav-item searchbar-container">
            <input 
                type="text" 
                placeholder="Buscar" 
                className="searchbar"
            /><IoSearchSharp className="icon"/>
          </div>

          {/* <div className="nav-item">User Photo</div>
          <div className="nav-item">Name</div>
          <div className="nav-item">Profile</div>
          <div className="nav-item">Notifications</div> */}
        </nav>
      </header>

      {/* Sidebar*/}
      <Sidebar showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default Navbar;
