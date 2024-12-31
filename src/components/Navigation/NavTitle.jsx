import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useLocation } from "react-router-dom";

export default function NavTitle() {
  const location = useLocation();
  const [title, setTitle] = useState("BOOK BUDDY");

  useEffect(() => {
    console.log("NAVTITLE location", location.pathname);
    switch (location.pathname) {
      case "/books":
        setTitle("Books");
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

  //   switch (location.pathname) {
  //     case "/books":
  //       setTitle("BOOKS");
  //       break;
  //     default:
  //       setTitle("BOOK BUDDY");
  //       break;
  //   }
  return <div className="nav-item"><h2>{title}</h2></div>;
}
