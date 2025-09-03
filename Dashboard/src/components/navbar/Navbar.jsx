import { useNavigate, useLocation } from "react-router-dom";
import "@styles/Navbar.css";

const Navbar = () => {
    return(
        <header className="main-header">
            <nav className="main-nav">
                <div className="nav-item">
                    Logo
                </div>
                <div className="nav-item">
                    Searchbar
                </div>
                <div className="nav-item">
                    User Photo
                </div>
                <div className="nav-item">
                    Name
                </div>
                <div className="nav-item">
                    Profile
                </div>
                <div className="nav-item">
                    Notifications
                </div>
            </nav>
        </header>
    )
}

export default Navbar