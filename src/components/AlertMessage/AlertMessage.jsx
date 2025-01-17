import React from 'react'
import '../../index.css'

export default function AlertMessage({type, message}) {

switch (type) {
    case "error":
        return <div className='container error-message'>{message}</div>;
        break;

    default:
        <div className='container error-message'>{message}</div>;
        break;
}
}