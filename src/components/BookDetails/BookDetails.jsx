// import React from "react";
// import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetBookDetailsQuery,
  useUpdateBookStatusMutation,
} from "./BookDetailsSlice";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../../store/confirmLoginSlice";

export default function BookDetails() {
  const { id } = useParams();
  const [bookId, setBookId] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookCoverImage, setBookCoverImage] = useState("");
  const [bookAvailable, setBookAvailable] = useState("");
  const login = useSelector(getLogin);

  //CHECKOUT book action from BookDetailsSlice.
  const [updateBookStatus] = useUpdateBookStatusMutation();
  // GET book details.
  const { data, isSuccess } = useGetBookDetailsQuery(id);
  const {
    data: bookDetails,
    error,
    isLoading,
    refetch,
  } = useGetBookDetailsQuery(id);
  // Use useEffect to trigger refetch on route change
  useEffect(() => {
    refetch(); // Trigger refetch every time the route changes
  }, [location, refetch]); // Dependency on location ensures refetch on route change

  // wait for async update..
  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log("useEffect data.book", data.book);
  //     setBookId(data.book.id);
  //     setBookTitle(data.book.title);
  //     setBookAuthor(data.book.author);
  //     setBookDescription(data.book.description);
  //     setBookCoverImage(data.book.coverimage);
  //     setBookAvailable(data.book.available);
  //   }
  // }, [data]);

  async function onCheckOut(e) {
    e.preventDefault();
    console.log("checkOut clicked");
    try {
      const response = await updateBookStatus({ id, available: false });
      console.log("reserve book response", response);
      setBookAvailable(response.data.book.available);
    } catch (error) {
      console.log(error);
    }
  }

  async function onCheckIn(e) {
    e.preventDefault();
    console.log("check-IN clicked");
    try {
      const response = await updateBookStatus({ id, available: true });
      console.log("reserve book RESPONSE.DATA.BOOK", response.data.book);
      setBookAvailable(response.data.book.available);
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading) {
    return <p>Loading..</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (

    
    <div className="container page-container">
      {console.log('BOOK DETAILS data', bookDetails)}
      <div className="flex-container">
        <div className="account-info-container">
          <div className="account-info-item">
            <span className="form-label">Title: </span>
            {/* <span>{bookTitle}</span> */}
            <span>{bookDetails.book.title}</span>
          </div>
          <div className="account-info-item">
            <span className="form-label">Author: </span>
            <span>{bookDetails.book.author}</span>
          </div>
          <p></p>
          <div className="account-info-item">
            <span className="form-label">Description: </span>
            <span>{bookDetails.book.description}</span>
          </div>
          <div className="account-info-item">
            <p></p>
            <span className="form-label">Status: </span>
            <span>{bookDetails.book.available ? "Available" : "Checked Out"}</span>
          </div>
          <p></p>
          <div className="account-info-item">
            {login && bookDetails.book.available && (
              <Button variant="primary" onClick={onCheckOut}>
                Reserve
              </Button>
            )}
          </div>
        </div>

        <div className="account-info-container">
          <div className="account-info-item">
            <img src={bookDetails.book.coverimage} />
          </div>
        </div>
      </div>
    </div>
  );
}
