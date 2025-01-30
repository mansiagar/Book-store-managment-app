import "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/Books" className="nav-item">
          Books
        </NavLink>
        <NavLink to="/login" className="nav-item">
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
