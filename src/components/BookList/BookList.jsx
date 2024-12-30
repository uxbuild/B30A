/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetBookListQuery } from "./BookListSlice";
import BookListItem from "../BookListItem/BookListItem";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getSearchKey } from "../../store/searchKeySlice";

export default function Books() {
  // track and render books..
  const [books, setBooks] = useState([]);

  // get books..
  const { data, isSuccess } = useGetBookListQuery();

  // search books: search key to filter display of books.
  const searchKey = useSelector(getSearchKey);

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

  //return boolean, used in books array filter.
  function searchBook(book, key){
    return book.title.toLowerCase().search(key.toLowerCase())>-1;
  }

  return (
    <div className="container page-container">
      {/* <h2>Books: {books.length}</h2> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {
            // filter result based on searchKey if it is not blank.
            books.filter((book)=>{return book.title.toLowerCase().search(searchKey.toLowerCase())>-1}).map((item, index) => {
              return (
                <BookListItem
                  key={index}
                  num={index}
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  available={item.available}
                  book={item}
                />
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
}
