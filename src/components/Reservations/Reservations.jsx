import React from "react";
import { useGetReservationsQuery } from "./reservationsSlice";
import { useEffect, useState } from "react";

export default function Reservations() {

    const [reservations, setReservations] = useState([]);
  // get books..
  const { data, isSuccess } = useGetReservationsQuery();

useEffect(()=>{
    console.log('GET RESERVATIONS useEffect');
    
    if(isSuccess){
        console.log('get reservations success');
        console.log('data', data);
        setReservations([...data.reservation])
        console.log('state reservations', reservations);
        
    }
},[isSuccess])

function onClickDeleteReservation(id){
    console.log('CLICK delete reservation ID', id);
    
}

  return (
    <>
    <p>Reservations</p>
    <ul>
        {reservations.map((book)=>{ return (<p key={book.id}>{book.title}, Reservation ID: {book.id} | <button onClick={()=>{onClickDeleteReservation(book.id)}}>Check In</button></p>)})}
    </ul>
    </>
  );
}
