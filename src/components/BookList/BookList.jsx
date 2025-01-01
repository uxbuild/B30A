/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookListItem from "../BookListItem/BookListItem";
import { Table } from "react-bootstrap";
import { getSearchKey } from "../../store/searchKeySlice";

// API and STATE actions
import { useSelector, useDispatch } from "react-redux";
import { useGetBookListQuery, updateBookList } from "./BookListSlice";

export default function Books() {
  // track and render books..
  const [books, setBooks] = useState([]);
  // get books..

  // STORE access..
  // const bookList = useSelector((state) => {
  //   state.bookList.books;
  // });
  // console.log("BOOK LIST STORE book list", bookList);
  // TESTING
  // const crap = useSelector((state) => state.bookList.crap);
  // console.log("BOOK LIST STORE crap", crap);

  const dispatch = useDispatch();
  // search books: search key to filter display of books.
  const searchKey = useSelector(getSearchKey);

  const { data: catalog, error, isLoading, refetch } = useGetBookListQuery();

  if (isLoading) {
    return <p>Loading..</p>;
  }
  if (error){
    return (<p>{error.message}</p>)
  }

  return (
    <div>
      <h3>Items</h3>
      {console.log('result', catalog)}
      <ul>
        {catalog.books?.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <button onClick={refetch}>Refresh List</button>
    </div>
  )
}
