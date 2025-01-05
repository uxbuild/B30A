import { useEffect } from "react";
import { Table } from "react-bootstrap";

// import API queries.
import {
  useGetReservationsQuery,
  useDeleteReservationMutation,
} from "./reservationsSlice";

import ReservationItem from "./ReservationItem";

export default function Reservations() {
  // ACTION delete reservation
  const [deleteReservation] = useDeleteReservationMutation();

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
      // NEED MESSAGING ON FAILURE OF THIS API CALL..
    } catch (error) {
      console.log("DELETE RESERVATION error", error);
      // NEED MESSAGING ON FAILURE OF THIS TRY-CATCH..
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
