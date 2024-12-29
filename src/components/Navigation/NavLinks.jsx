import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavLinks(){

    return (
        <div className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/register">Register</NavLink>
            <NavLink className="nav-link" to="/account">Account</NavLink>
        </div>
        
    )
}