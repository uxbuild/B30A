import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, addBook, updateBooks } from "./CounterSlice";

export default function Counter() {
  // state.sliceName.propertyName
  const count = useSelector((state) => state.counter.value);
  const names = useSelector((state) => state.counter.names);
  const books = useSelector((state) => state.counter.books);

  const dispatch = useDispatch();

  function onClickAddBook(e){
    e.preventDefault();
    const bookTitle = document.getElementById('inputBookTitle').value;
    console.log('CLICK add book', bookTitle);
    dispatch(addBook({title:bookTitle}));
  }
  function onClickReplaceBooks(e){
    e.preventDefault();
    console.log('CLICK replace books');
    const newBookList = [{title: "A Tale of Two Cities"}, {title: "The Lost Horizon"}];
    dispatch(updateBooks(newBookList));
  }

  return (
    <div>
      <div>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>Names</div>
      <p>State with list of strings.</p>
      <ul>
        {names?.map((name) => {
          return <p>{name}</p>;
        })}
      </ul>
      <div>Books</div>
      <p>State with a list of objects.</p>
      <div>
        <input id="inputBookTitle" type="text" />
        <button type="button" onClick={onClickAddBook}>Add Book</button>
      </div>
      <div><button type="button" onClick={onClickReplaceBooks}>Replace Books</button></div>
      <ul>
        {books?.map((book) => {
          return <p>{book.title}</p>;
        })}
      </ul>
    </div>
  );
}
