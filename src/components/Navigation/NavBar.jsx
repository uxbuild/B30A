/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../../store/confirmLoginSlice";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import NavSearchField from "./NavSearchField";
import { useLocation } from "react-router-dom";
import NavTitle from "./NavTitle";
import NavLinks from "./NavLinks";
// import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";

export default function NavBar() {
  const login = useSelector(getLogin);
  const location = useLocation();

  const [isBrowse, setIsBrowse] = useState(false);
  // console.log(`browser REFRESH: ${login}`);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setIsBrowse(true);
        break;
      case "/books":
        setIsBrowse(true);
        break;
      default:
        setIsBrowse(false);
    }
  }, [location.pathname]);

  function onFilter(e) {
    e.preventDefault();
    // console.log("onFilter", e.target.value);
  }

  return (
    <div className="container nav-container">
      <div className="flex-container">
        <div id="nav-group-1" className="nav-group">
          {/* <NavTitle /> */}
          {/* TEST ROUTE AWARE component */}
          {/* <Routes>
            <Route path="/" element={<NavTitle />} />
            <Route path="/books" element={<NavTitle />} />
            <Route path="/books/:id" element={<NavTitle />} />
            <Route path="/account" element={<NavTitle />} />
            <Route path="/register" element={<NavTitle />} />
            <Route path="/login" element={<NavTitle />} />
            <Route path="/logout" element={<NavTitle />} />
            <Route path="*" element={<NavTitle />} />
          </Routes> */}
          <div className="nav-item">Welcome, GUEST</div>
        </div>
        {isBrowse && (
          <div className="nav-group">
            <div className="nav-item">
              <NavSearchField />
            </div>
          </div>
        )}

        <div id="nav-group-2" className="nav-group">
          <NavLinks />
        </div>
      </div>
    </div>
  );
}
