/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
// import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserAccountQuery } from "./AccountSlice";

export default function Account() {
  const navigate = useNavigate();

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
    <div className=" container page-container">
      {/* <h2>Account</h2> */}
      <p>Account ID: {accountId}</p>
      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
      <p>Email: {email}</p>
      <p>
        {!!books.length && "You have books checked out."}
        {!books.length && "No books checked out."}
      </p>
    </div>
  );
}
