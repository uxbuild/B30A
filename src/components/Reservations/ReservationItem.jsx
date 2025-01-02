import React from "react";

export default function ReservationItem({
  index,
  id,
  title,
  onDeleteReservation,
}) {
  function onHandleClick() {
    onDeleteReservation(id);
  }
  return (
    <tr key={index}>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <button type="button" onClick={onHandleClick}>
          Return
        </button>
      </td>
    </tr>
  );
}
