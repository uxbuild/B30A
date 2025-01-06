import { Button } from "react-bootstrap";

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
        <Button variant="primary" onClick={onHandleClick}>
          Return Item
        </Button>
      </td>
    </tr>
  );
}
