import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function NavTitle(props) {
  const location = useLocation();
  const [title, setTitle] = useState("BOOK BUDDY");

  const params = useParams();

  // get book id from route.
  const { id } = useParams();
  const { bookId } = useParams();

  useEffect(() => {
    switch (location.pathname) {
      case "/books":
        setTitle("Books");
        break;
      case `/books/${id}`:
        console.log("location bookId:", location.pathname);
        setTitle("Book Details");
        break;
      case "/":
        setTitle("Catalog: Books");
        break;
      case "/login":
        setTitle("Sign In");
        break;
      case "/logout":
        setTitle("Sign Out");
        break;
      case "/account":
        setTitle("Account");
        break;
      case "/register":
        setTitle("Account Registration");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <div className="nav-item">
      <h2>{title}</h2>
    </div>
  );
}
