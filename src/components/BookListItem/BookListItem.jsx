import React from "react";
import ReactDOM from "react-dom/client";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BookListItem({ num, id, title, author, available }) {
  return (
    // <p>{num+1}. {title}</p>
    <tr>
      <td>{num + 1}</td>
      <td>
        <Link to={`/books/${id}`}>
          {title}
        </Link>
      </td>

      <td>{author}</td>
      {/* <td>{available.toString()}</td> */}
      {available && <td className="book-item-available">Available</td>}
      {!available && <td className="book-item-checked-out">Checked Out</td>}
    </tr>
  );
}
