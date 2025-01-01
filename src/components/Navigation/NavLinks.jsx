import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
