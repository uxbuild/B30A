import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { setSearchKey, getSearchKey } from "../../store/searchKeySlice";

export default function NavSearchField() {
  const dispatch = useDispatch();
  const searchKey = useSelector(getSearchKey);

  function onSearchChange(e) {
    e.preventDefault();
    dispatch(setSearchKey(e.target.value));
  }

  return (
    <>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={onSearchChange}
        value={searchKey}
      />
      <Form.Text id="passwordHelpBlock" muted>
        Keyword search..
      </Form.Text>
    </>
  );
}
