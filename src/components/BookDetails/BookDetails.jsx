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
import NavTitle from "../Navigation/NavTitle";

export default function BookDetails() {
  const { id } = useParams();
  const [bookAvailable, setBookAvailable] = useState("");
  const login = useSelector(getLogin);

  //CHECKOUT book action from BookDetailsSlice.
  const [updateBookStatus] = useUpdateBookStatusMutation();
  // GET book details.
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

  async function onCheckOut(e) {
    e.preventDefault();
    console.log("checkOut clicked");
    try {
      const response = await updateBookStatus({ id, available: false });
      setBookAvailable(response.data.book.available);
      // NEED TO HANDLE BOOK STATUS UPDATE FAILURE..
    } catch (error) {
      console.log(error);
      // HANDLE ASYNC ERROR..
    }
  }

  async function onCheckIn(e) {
    e.preventDefault();
    try {
      const response = await updateBookStatus({ id, available: true });
      setBookAvailable(response.data.book.available);
      // NEED ERROR CHECK ON FAILED BOOK STATUS UPDATE..
    } catch (error) {
      // NEED TO HANDLE ERROR WITH MESSAGE.
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
      <div className="col-section">
        <NavTitle />
      </div>
      {console.log("BOOK DETAILS data", bookDetails)}
      <div className="flex-container">
        <div className="book-details-info-section">
          <div className="book-info-item">
            <span className="form-label">Title: </span>
            <span>{bookDetails.book.title}</span>
          </div>
          <div className="book-info-item">
            <span className="form-label">Author: </span>
            <span>{bookDetails.book.author}</span>
          </div>
          <p></p>
          <div className="book-info-item">
            <span className="form-label">Description: </span>
            <span>{bookDetails.book.description}</span>
          </div>
          <div className="book-info-item">
            <p></p>
            <span className="form-label">Status: </span>
            <span>
              {bookDetails.book.available ? "Available" : "Checked Out"}
            </span>
          </div>
          <p></p>
          <div className="book-info-item">
            {login && bookDetails.book.available && (
              <Button variant="primary" onClick={onCheckOut}>
                Reserve
              </Button>
            )}
          </div>
        </div>

        <div className="book-details-info-section">
          <div className="book-info-item">
            <img src={bookDetails.book.coverimage} />
          </div>
        </div>
      </div>
    </div>
  );
}
