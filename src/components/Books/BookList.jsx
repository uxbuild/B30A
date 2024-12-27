/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetBookListQuery } from "./BookListSlice";
import BookListItem from "../BookListItem/BookListItem";

export default function Books() {
  const [books, setBooks] = useState([]);
  const { data, isSuccess } = useGetBookListQuery();

  useEffect(() => {
    console.log("useEffect..");

    if (isSuccess) {
      console.log("BOOKLIST success");
      console.log("books data", data.books);
      // console.log("books stringified", JSON.stringify(data.books));
      // console.log(JSON.parse(JSON.stringify(data.books)));
      setBooks(JSON.parse(JSON.stringify(data.books)));
      // setBooks(["hello"]);
      // console.log("updated books", books);
    }
  }, [data, isSuccess]);

  return (
    <div className="page-container">
      <h2>Books: {books.length}</h2>
      
      {books.map((item, index) => {
        return <BookListItem key={index} num={index} title={item.title} />;
      })}
    </div>
  );
}
