/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookListItem from "../BookListItem/BookListItem";
import { Table } from "react-bootstrap";
import { getSearchKey } from "../../store/searchKeySlice";
import { useLocation } from "react-router-dom";
import NavTitle from "../Navigation/NavTitle";

// API and STATE actions
import { useSelector, useDispatch } from "react-redux";
import { useGetBookListQuery, updateBookList } from "./BookListSlice";

export default function Books() {
  // track and render books..
  const [books, setBooks] = useState([]);
  // get books..

  const dispatch = useDispatch();
  const location = useLocation(); // Get current location

  // search books: search key to filter display of books.
  const searchKey = useSelector(getSearchKey);

  const { data: catalog, error, isLoading, refetch } = useGetBookListQuery();
  // Use useEffect to trigger refetch on route change
  useEffect(() => {
    refetch(); // Trigger refetch every time the route changes
  }, [location, refetch]); // Dependency on location ensures refetch on route change

  if (isLoading) {
    return (
      <div className="container page-container">
        <div className="col-section">Loading book list ..</div>
      </div>
    );
  }
  if (error) {
    // return
    return (
      <div className="container page-container">
        <div className="col-section">Error: {error}</div>
      </div>
    );
  }

  const filteredCatalog = catalog.filter((book) => {
    return (
      // TRUE if search finds something..
      book.title.toLowerCase().search(searchKey.toLowerCase()) > -1
    );
  });

  if (filteredCatalog.length > 0) {
    return (
      <div className="container page-container">
        <div className="col-section">
          <NavTitle />
        </div>
        <div className="col-section">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {filteredCatalog.map((item, index) => {
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
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container page-container">
        <div className="col-section">
          <NavTitle />
        </div>
        <div className="col-section">No search results.</div>
      </div>
    );
  }
}
