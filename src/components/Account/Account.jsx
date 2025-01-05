/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
// import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserAccountQuery } from "./AccountSlice";
import { useSearchParams } from "react-router-dom";
import { getLogin } from "../../store/confirmLoginSlice";
import { useSelector, useDispatch } from "react-redux";
import Reservations from "../Reservations/Reservations";
import { Routes, Route } from "react-router-dom";
import Counter from "../Reservations/Counter";
import NavTitle from "../Navigation/NavTitle";
import { useLocation } from "react-router-dom";
import { setLoginName } from "../../store/LoginNameSlice";

export default function Account() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const msg = searchParams.get("msg");

  // STORE user logged in?
  const login = useSelector(getLogin);

  // init request response.
  const {
    data: userData,
    isSuccess,
    error,
    refetch,
  } = useGetUserAccountQuery();

  const [accountId, setAccountId] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  // const [books, setBooks] = useState([]);

  // check for async response in effect
  useEffect(() => {
    console.log('ACCOUNT use effect');
    console.log('ACCOUNT login state', login);
    
    if (isSuccess) {
      console.log('ACCOUNT use effect - success account query');
      
      setAccountId(userData.id);
      setFirstname(userData.firstname);
      setLastname(userData.lastname);
      setEmail(userData.email);
      // setBooks([...userData.books]);
      dispatch(setLoginName(`${userData.firstname} ${userData.lastname}`))
    }
  }, [isSuccess, login]);

  return (
    <>
    {/* IF LOGGED IN.. */}
      {login && (
        <div className=" container page-container">
          {msg && <div className="confirmation-message">{msg}</div>}

          <div className="col-section">
            <NavTitle />
          </div>
          <div className="flex-container">
            <div id="account-user" className="account-info-container">
              <div className="account-info-item">
                <span className="form-label">Account ID:</span> {accountId}
              </div>
              <div className="account-info-item">
                <span className="form-label">First Name:</span> {firstname}
              </div>
              <div className="account-info-item">
                <span className="form-label">Last Name:</span> {lastname}
              </div>
              <div className="account-info-item">
                <span className="form-label">Email:</span> {email}
              </div>
            </div>
            <div id="account-reservations" className="account-info-container">
              <Reservations />
            </div>
          </div>
        </div>
      )}
      {!login && (
        <div className=" container page-container">
          {msg && <div className="confirmation-message">{msg}</div>}

          <div className="flex-container">
            <div className="alert-message">
              Please sign in to access your account.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
