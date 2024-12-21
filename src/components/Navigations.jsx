/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import { Link } from "react-router-dom";


export default function Navigations() {
  return (
    <div className="container">
      <ul>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/account">Account</Link>
      <Link to="/books">Books</Link>
      <Link to="books/:id">Single Book</Link>
      <Link to="*">Lost</Link>
      </ul>
    </div>
  );
}
