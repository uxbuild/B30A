import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useSelector, useDispatch } from "react-redux";
import { setSearchKey } from "../../store/searchKeySlice";

export default function NavSearchField() {

    const dispatch = useDispatch();

function onSearchChange(e){
    e.preventDefault();
    // console.log('search', e.target.value);
    dispatch(setSearchKey(e.target.value));
    
}
  return (
    <>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={onSearchChange}
      />
      <Form.Text id="passwordHelpBlock" muted>
        Keyword search..
      </Form.Text>
    </>
  );
}
