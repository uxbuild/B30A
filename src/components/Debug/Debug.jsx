import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// store app vars..getters (slice actions)
import { getLogin } from "../../store/confirmLoginSlice";
import { getSearchKey } from "../../store/searchKeySlice";

//location
import { useLocation } from "react-router-dom";

// COMPONENT function
export default function Debug() {
  //DISPATCH TO STORE..
  // used during debug mode.
  const login = useSelector(getLogin);
  const searchKey = useSelector(getSearchKey);
  const token = localStorage.getItem("token");
  const location = useLocation();

  return (
    <>
      <div className="container debug-container">
        {/* KEEP FOR DEBUG, OTHERWISE THIS IS A VANITY BANNER */}

        {/* <div className="flex-container">
          <div id="nav-group-1">
            <div className="nav-item">Login: {login.toString()}</div>
          </div>
          <div id="nav-group-2">
            <div className="nav-item">Location: {location.pathname}</div>
            <div className="nav-item">Search: {searchKey}</div>
          </div>
          <div id="nav-group-3">
            <div className="nav-item">Debug</div>
          </div>
        </div> */}
      </div>
    </>
  );
}
