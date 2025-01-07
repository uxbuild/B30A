import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

//components
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Account from "./components/Account/Account";
import Catalog from "./components/Catalog/Catalog";
import NavBar from "./components/Navigation/NavBar-temp";
import Debug from "./components/Debug/Debug";
import Lost from "./components/Lost";
import BookDetails from "./components/BookDetails/BookDetails";

function App() {
  return (
    <>
      <Router>
        <div>
          <Debug />
          <NavBar />
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/books" element={<Catalog />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/account" element={<Account />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Lost />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
