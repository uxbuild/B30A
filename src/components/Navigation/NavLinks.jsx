
import { NavLink } from "react-router-dom";
import { useSelector, } from "react-redux";
import { getLogin } from "../../store/confirmLoginSlice";

export default function NavLinks() {
  const isLoggedIn = useSelector(getLogin);

  return (
    <div className="nav-item">
      <NavLink className="nav-link" to="/">
        Catalog
      </NavLink>

      {/* ACCOUNT */}
      {isLoggedIn && (
        <NavLink className="nav-link" to="/account">
          Account
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className="nav-link" to="/logout">
          Logout
        </NavLink>
      )}
      {/* LOGIN */}
      {!isLoggedIn && (
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      )}
      {/* REGISTER */}
      {!isLoggedIn && (
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
      )}
    </div>
  );
}
