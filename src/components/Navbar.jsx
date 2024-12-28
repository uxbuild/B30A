/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../index.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../store/ConfirmLoginSlice";

export default function Navbar() {
  const login = useSelector(getLogin);

  if (login) {
    // console.log("Navigation - there is a token");
    // return ("You are logged in.")
    return (
      <div className="container">
        <div className="flex-container">
          <div id="nav-group-1">
            <Link className="nav-item" to="/books">
              Browse Books
            </Link>
          </div>
          <div id="nav-group-2">
            <Link className="nav-item" to="/account">
              Account
            </Link>
            <Link className="nav-item" to="/logout">
              Logout
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    console.log("Navigation - token not found");
    // return "You are not logged in.";
    return (
      <div className="container">
        <div className="flex-container">
          <div id="nav-group-1">
            {/* className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } */}
            {/* <NavLink className="nav-item" to="/books"> */}
            <NavLink className={({ isActive, isPending }) =>
    isPending ? "nav-item-pending" : isActive ? "nav-item-active" : "nav-item"
  } to="/books">
               Book List
            </NavLink>
          </div>
          <div id="nav-group-2">
            <NavLink className="nav-item" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item" to="/register" >
             Register
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
