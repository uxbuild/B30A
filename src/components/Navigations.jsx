/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useState, useEffect } from "react";
import Debug from "./Debug/Debug";
import { useSelector, useDispatch } from "react-redux";

export default function Navigations({ watch, setWatch }) {
  // managing token state (??)
  //   const [token, setToken] = useState(null);

  // get login state from store.

  const token = localStorage.getItem("token");
  const login = useSelector((state) => state.login.value);

  if (login) {
    console.log("Navigation - there is a token");

    // return ("You are logged in.")
    return (
      <div className="container">
        <div className="flex-container">
          <div id="nav-group-1">
            <Link className="nav-item" to="/books">
              Books
            </Link>
          </div>
          <div id="nav-group-3">
            {/* <Debug watch={watch} setWatch={setWatch} /> */}
            <Debug />
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
            <Link className="nav-item" to="/books">
              Books
            </Link>
          </div>
          <div id="nav-group-3">
            {/* <Debug watch={watch} setWatch={setWatch} /> */}
            <Debug />
          </div>
          <div id="nav-group-2">
            <Link className="nav-item" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
