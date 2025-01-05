
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function NavTitle(props) {
  const location = useLocation();
  const [title, setTitle] = useState("BOOK BUDDY");



  // get book id from route.
  const { id } = useParams();

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
