import React from "react";
import Button from "@mui/material/Button";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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
        {/* <button type="button" onClick={onHandleClick}> */}
        <Button variant="contained" onClick={onHandleClick}>
          Return
        </Button>
        {/* Return */}
        {/* </button> */}
      </td>
    </tr>
  );
}
