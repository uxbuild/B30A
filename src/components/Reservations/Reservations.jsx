import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import API queries.
import {
  useGetReservationsQuery,
  useDeleteReservationMutation,
} from "./reservationsSlice";
// import reservations reducers
import { updateReservations } from "./ReservationsSlice";

export default function Reservations() {

    // dispatch hook to update state.
  const dispatch = useDispatch();

  // GET current reservations state.
  const reservations = useSelector((state) => state.reservations.books);
  console.log("STORE RESERVATIONS init", reservations);

  // delete reservation action
  const [deleteReservation] = useDeleteReservationMutation();

  // get books..
    const { data, isSuccess } = useGetReservationsQuery();

  useEffect(() => {
    console.log("RESERVATIONS useEffect");

    if (isSuccess) {
      console.log("RESERVATIONS success");
      console.log("reservation data received", data?.reservation);
      dispatch(updateReservations(data.reservation));
    }
  }, [data, reservations]);

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
        {reservations &&
          reservations.map((book) => {
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
