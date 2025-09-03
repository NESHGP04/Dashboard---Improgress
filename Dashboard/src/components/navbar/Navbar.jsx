import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
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

          <div className="nav-item">Searchbar</div>
          <div className="nav-item">User Photo</div>
          <div className="nav-item">Name</div>
          <div className="nav-item">Profile</div>
          <div className="nav-item">Notifications</div>
        </nav>
      </header>

      {/* Side Navbar SEPARAR A OTRO COMPONENTE DESP*/}
      <Sidebar showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default Navbar;
