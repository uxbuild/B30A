import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

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
  //   const reservations = useSelector((state) => state.reservations.books);
  //   console.log("STORE RESERVATIONS init", reservations);

  // ACTION delete reservation
  const [deleteReservation] = useDeleteReservationMutation();

  // GET books..
  //   const { data, isSuccess } = useGetReservationsQuery();
  const {
    data: reservations,
    error,
    isLoading,
    refetch,
  } = useGetReservationsQuery();
  // Use useEffect to trigger refetch on route change
  useEffect(() => {
    refetch(); // Trigger refetch every time the route changes
  }, [location, refetch]); // Dependency on location ensures refetch on route change

  //   useEffect(() => {
  //     console.log("RESERVATIONS useEffect");

  //     if (isSuccess) {
  //       console.log("RESERVATIONS success");
  //       console.log("reservation data received", data?.reservation);
  //       dispatch(updateReservations(data.reservation));
  //     }
  //   }, [data, reservations]);

  async function onClickDeleteReservation(id) {
    console.log("CLICK delete reservation ID", id);
    try {
      const response = await deleteReservation({ id });
      console.log("DELETE RESERVATION response", response);
      //   refetch();
    } catch (error) {
      console.log("DELETE RESERVATION error", error);
    }
  }

  if (isLoading) {
    return <p>Loading..</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <p>Reservations</p>
      {console.log("RESERVATIONS data", reservations)}
      <ul>
        {reservations &&
          reservations.reservation.map((book) => {
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
