import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// action generators
import { getLogin } from "../../store/ConfirmLoginSlice";

// export default function Debug({ watch, setWatch }) {
// export default function Debug({ loggedIn }) {

// COMPONENT function
export default function Debug() {
  //DISPATCH TO STORE..
  const login = useSelector(getLogin);
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="container debug-container">
        <div className="flex-container">
          <div id="nav-group-1">
            <div className="nav-item">Login: {login.toString()}</div>
            {/* <div className="nav-item">Token: {token}</div> */}
          </div>

          <div id="nav-group-2">
            <div className="nav-item">Debug</div>
          </div>
        </div>
      </div>
    </>
  );
}
