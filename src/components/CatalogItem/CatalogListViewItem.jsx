import React from "react";
import ReactDOM from "react-dom/client";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CatalogListViewItem({
  num,
  id,
  title,
  author,
  available,
  book,
}) {
  return (
    // <p>{num+1}. {title}</p>
    <tr>
      <td>{num + 1}</td>
      <td>
        <Link to={`/books/${id}`}>{title}</Link>
      </td>

      <td>{author}</td>
      {/* <td>{available.toString()}</td> */}
      {available && (
        <td className="book-item book-item-available">
          <div>
            {/* <i className="material-icons">radio_button_checked</i> */}
            <i className="material-icons-outlined">star</i>
          </div>
          <div>&nbsp; Available</div>
        </td>
      )}
      {!available && (
        <td className="book-item book-item-checked-out">
          <div>
            {/* <i className="material-icons-outlined">adjust</i> */}&nbsp;
          </div>
          <div>Checked Out</div>
        </td>
      )}
    </tr>
  );
}
