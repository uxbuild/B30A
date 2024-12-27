/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useGetBookList } from "./BookListSlice";

export default function Books() {
  
  const [bookList, setBookList] = useState([]);
  // const { data, isSuccess } = useGetBookList();

  // useEffect(() => {
  //   if (isSuccess) {
  //     setBookList(
  //       updatedBookList.map((i) => {
  //         return i;
  //       })
  //     );
  //     console.log("book list", bookList);
  //   } else {
  //     console.log("Error retrieving book list");
  //   }
  // }, [updatedBookList]);

  return <div className="page-container">Books</div>;
}
