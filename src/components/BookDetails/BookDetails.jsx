import React from 'react';
import ReactDOM from 'react-dom/client';
import { Table } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";


export default function BookDetails(){
    const { id } = useParams();
    return (
        <div className="container page-container">
            <h2>Book Details</h2>
            <p>params: {id}</p>
        </div>
    )
}