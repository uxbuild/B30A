/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
// import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserAccountQuery } from "./AccountSlice";
import { useSearchParams } from "react-router-dom";
import { getLogin } from "../../store/confirmLoginSlice";
import { useSelector } from "react-redux";
import Reservations from "../Reservations/Reservations";

export default function Account() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("query string", searchParams.get("msg"));
  const msg = searchParams.get("msg");
  const login = useSelector(getLogin);

  // init request response.
  const { data: userData, isSuccess } = useGetUserAccountQuery();
  // const [user, setUser] = useState({});
  // const [userdata, setUserData] = useState(null);
  // const [id, setId] = useState(null);
  const [accountId, setAccountId] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [books, setBooks] = useState([]);

  //local vars / not state.
  const user = {};

  // check for async response in effect
  useEffect(() => {
    if (isSuccess) {
      // update user info.. what about STORE??
      console.log("Account success useEffect..");
      console.log("data", userData);

      setAccountId(userData.id);
      setFirstname(userData.firstname);
      setLastname(userData.lastname);
      setEmail(userData.email);
      setBooks([...userData.books]);
    }
    // console.log('user: ', user);
  }, [userData]);

  return (
    <>
      {login && (
        // <div className=" container page-container">
        //   {msg && <div className="confirmation-message">{msg}</div>}
        //   <p>Account ID: {accountId}</p>
        //   <p>First Name: {firstname}</p>
        //   <p>Last Name: {lastname}</p>
        //   <p>Email: {email}</p>
        // </div>
        <div className=" container page-container">
          {msg && <div className="confirmation-message">{msg}</div>}

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
            {/* <div id="account-user" className="account-info-container">
              <div className="account-info-item"> */}
                <div className="alert-message">
                  Please sign in to access your account.
                </div>
              {/* </div>
            </div> */}
          </div>
        </div>
      )}

      {/* <p>hello </p> */}
    </>
  );
  // return (
  // {login && (<p>hello</p>)}
  // <div className=" container page-container">
  //   {msg && <div className="confirmation-message">{msg}</div>}
  //   <p>Account ID: {accountId}</p>
  //   <p>First Name: {firstname}</p>
  //   <p>Last Name: {lastname}</p>
  //   <p>Email: {email}</p>
  //   <p>
  //     {!!books.length && "You have books checked out."}
  //     {!books.length && "No books checked out."}
  //   </p>
  // </div>
  // )}
  // );
}
