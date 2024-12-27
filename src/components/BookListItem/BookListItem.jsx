import React from 'react';
import ReactDOM from 'react-dom/client';

export default function BookListItem({ num, title}){

    return (
        <p>{num+1}. {title}</p>
    )
}