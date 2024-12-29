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
        setTitle("Browse Books");
        break;
      case "/":
        setTitle("BOOK BUDDY Catalog");
        break;
      case "/login":
        setTitle("BOOK BUDDY Login");
        break;
      case "/account":
        setTitle("BOOK BUDDY Account Summary");
        break;
      case "/register":
        setTitle("BOOK BUDDY Account Registration");
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
