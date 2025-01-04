import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Table } from "react-bootstrap";

// import API queries.
import {
  useGetReservationsQuery,
  useDeleteReservationMutation,
} from "./reservationsSlice";
// import reservations reducers
import { updateReservations } from "./ReservationsSlice";
import ReservationItem from "./ReservationItem";

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

  async function onDeleteReservation(id) {
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
      <div className="account-info-container-titlebar">Books reservations:</div>
      {/* {console.log("RESERVATIONS data", reservations)} */}
      {reservations.reservation.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations &&
              reservations.reservation.map((book, index) => {
                return (
                  <ReservationItem
                    key={index}
                    id={book.id}
                    title={book.title}
                    onDeleteReservation={onDeleteReservation}
                  />
                );
              })}
          </tbody>
        </Table>
      ) : (
        // no reservations to display
        <p className="empty-list-msg">No books checked out at this time.</p>
      )}
    </>
  );
}
