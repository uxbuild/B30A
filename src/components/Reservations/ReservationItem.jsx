import Button from "@mui/material/Button";

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
        <Button variant="contained" onClick={onHandleClick}>
        {/* <button type="button" className="btn"> */}
          Return Item
        </Button>
      </td>
    </tr>
  );
}
