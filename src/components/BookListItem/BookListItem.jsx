import React from 'react';
import ReactDOM from 'react-dom/client';
import { Table } from "react-bootstrap";

export default function BookListItem({ num, title, author, available}){

    return (
        // <p>{num+1}. {title}</p>
        <tr>
        <td>{num+1}</td>
        <td>{title}</td>
        <td>{author}</td>
        {/* <td>{available.toString()}</td> */}
        {available && <td className="book-item-available">Available</td>}
        {!available && <td className="book-item-checked-out">Checked Out</td>}
      </tr>
    )
}