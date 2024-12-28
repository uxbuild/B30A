// import React from "react";
// import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetBookDetailsQuery } from "./BookDetailsSlice";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function BookDetails() {
  const { id } = useParams();
  const [bookId, setBookId] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookCoverImage, setBookCoverImage] = useState("");
  const [bookAvailable, setBookAvailable] = useState("");

  //   const [isLoaded, setIsLoaded] = useState(false);

  const { data, isSuccess } = useGetBookDetailsQuery(id);

  // wait for async update..
  useEffect(() => {
    // console.log("useEffect A");
    if (isSuccess) {
      //   setIsLoaded(true);
      console.log("useEffect data.book", data.book);

      setBookId(data.book.id);
      setBookTitle(data.book.title);
      setBookAuthor(data.book.author);
      setBookDescription(data.book.description);
      setBookCoverImage(data.book.coverimage);
      setBookAvailable(data.book.available);
      // setBookTitle(data.book.title);
      // setBookTitle(data.book.title);
    }
  }, [isSuccess]);

  return (
    <div className="container page-container">
      <h2>Book Details</h2>
      {/* {isSuccess ? <p>Title: {bookTitle}</p> : <p>No book info..</p>} */}
      {isSuccess ? (
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
      )}
    </div>
  );
}
