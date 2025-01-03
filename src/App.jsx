import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

//components
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Account from "./components/Account/Account";
import BookList from "./components/BookList/BookList";
import NavBar from "./components/Navigation/Navbar";
import Debug from "./components/Debug/Debug";
import Lost from "./components/Lost";
import BookDetails from "./components/BookDetails/BookDetails";

function App() {
  const [token, setToken] = useState(null);

  const TOKEN_ID = "BOOK_BUDDY_TOKEN_ID";
  // debug
  const [watch, setWatch] = useState(0);

  return (
    <>
      <Router>
        <div>
          <Debug />
          <NavBar />
          {/* <Route path="/*" element={<NavBar />} /> */}
          {/* <Routes>
            <Route path="/*" element={<NavBar />} />
          </Routes> */}
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetails />} />
            {/* <Route path="/login" element={<Login tokenId={TOKEN_ID} setTokenId={setToken} />} /> */}
            {/* <Route path="/logout" element={<Logout tokenId={TOKEN_ID} setToken={setToken} />} /> */}
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
