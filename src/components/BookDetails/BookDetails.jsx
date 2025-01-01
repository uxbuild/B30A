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

  // GET book details.
  const { data, isSuccess } = useGetBookDetailsQuery(id);

  //CHECKOUT book action from BookDetailsSlice.
  const [updateBookStatus] = useUpdateBookStatusMutation();

  // wait for async update..
  useEffect(() => {
    if (isSuccess) {
      console.log("useEffect data.book", data.book);
      setBookId(data.book.id);
      setBookTitle(data.book.title);
      setBookAuthor(data.book.author);
      setBookDescription(data.book.description);
      setBookCoverImage(data.book.coverimage);
      setBookAvailable(data.book.available);
    }
  }, [isSuccess, bookAvailable]);

  async function onCheckOut(e) {
    e.preventDefault();
    console.log("checkOut clicked");
    try {
      const response = await updateBookStatus({ id, available: false });
      console.log('reserve book response', response);
      setBookAvailable(response.book.available);
    } catch (error) {
      console.log(error);
    }
  }

  async function onCheckIn(e) {
    e.preventDefault();
    console.log("check-IN clicked");
    try {
      const response = await updateBookStatus({ id, available: true });
      console.log('reserve book response', response);
      setBookAvailable(response.book.available);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container page-container">
      {/* <h2>Book Details</h2> */}
      {/* {isSuccess ? <p>Title: {bookTitle}</p> : <p>No book info..</p>} */}
      {/* {isSuccess ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={bookCoverImage} />
          <Card.Body>
            <Card.Title>{bookTitle}</Card.Title>
            <Card.Text>
              {bookDescription}
            </Card.Text>
            <Button variant="primary">Check Out/In</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>No book info.</p>
      )} */}

      <div className="flex-container">
        <div className="account-info-container">
          <div className="account-info-item">
            <span className="form-label">Title: </span>
            <span>{bookTitle}</span>
          </div>
          <div className="account-info-item">
            <span className="form-label">Author: </span>
            <span>{bookAuthor}</span>
          </div>
          <p></p>
          <div className="account-info-item">
            <span className="form-label">Description: </span>
            <span>{bookDescription}</span>
          </div>
          <div className="account-info-item">
            <p></p>
            <span className="form-label">Status: </span>
            <span>{bookAvailable ? "Available" : "Checked Out"}</span>
          </div>
          <p></p>
          <div className="account-info-item">
            {login && bookAvailable && (
              <Button variant="primary" onClick={onCheckOut}>
                Reserve
              </Button>
            )}
            {login && !bookAvailable && (
              <Button variant="primary" onClick={onCheckIn}>
                Check In
              </Button>
            )}
          </div>
        </div>

        <div className="account-info-container">
          <div className="account-info-item">
            <img src={bookCoverImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
