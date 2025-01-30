import "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/navbar.css";
import { useContext } from "react";
import { AuthContext } from "../Create";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  //handlelogut
  const handleLogut = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      <nav className="nav">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/Books" className="nav-item">
          Books
        </NavLink>
        {isAuthenticated ? (
          <button onClick={handleLogut}>Logout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
