import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

//components
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Account from "./components/Account";
import Navigations from "./components/Navigations";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Lost from "./components/Lost";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Router>
          <div>
          <Navigations />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="*" element={<Lost />} />
        </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
