import React from "react";
import {
  useGetReservationsQuery,
  useDeleteReservationMutation,
} from "./reservationsSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Reservations() {
  // track reservations
  const [reservations, setReservations] = useState([]);
  //   const reservations = useSelector();

  // delete reservation action
  const [deleteReservation] = useDeleteReservationMutation();

  // get books..
  const { data, isSuccess } = useGetReservationsQuery();

  useEffect(() => {
    console.log("GET RESERVATIONS useEffect");

    if (isSuccess) {
      console.log("get reservations success");
      console.log("data", data);
      setReservations([...data.reservation]);
      console.log("state reservations", reservations);
    }
  }, [isSuccess]);

  async function onClickDeleteReservation(id) {
    console.log("CLICK delete reservation ID", id);
    try {
      const response = await deleteReservation({ id });
      console.log("DELETE RESERVATION response", response);
    } catch (error) {
      console.log("DELETE RESERVATION error", error);
    }
  }

  return (
    <>
      <p>Reservations</p>
      <ul>
        {reservations.map((book) => {
          return (
            <p key={book.id}>
              {book.title}, Reservation ID: {book.id} |{" "}
              <button
                onClick={() => {
                  onClickDeleteReservation(book.id);
                }}
              >
                Check In
              </button>
            </p>
          );
        })}
      </ul>
    </>
  );
}
