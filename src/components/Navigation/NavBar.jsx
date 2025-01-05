
import "../../index.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavLoginName from "./NavLoginName";

export default function NavBar() {
  const location = useLocation();
  const [isBrowse, setIsBrowse] = useState(false);

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

  return (
    <div className="container nav-container">
      <div className="flex-container">
        <div id="nav-group-1" className="nav-group">
          <NavLoginName />
        </div>
        {isBrowse && <div className="nav-group"></div>}
        <div id="nav-group-2" className="nav-group">
          <NavLinks />
        </div>
      </div>
    </div>
  );
}
