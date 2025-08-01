import React, { useRef, forwardRef, useImperativeHandle } from 'react';


const AddTodo = forwardRef(({ onAdd }, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    clearInput: () => {
      inputRef.current.value = "";
    }
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      onAdd(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Add todo" />
      <button type="submit">Add</button>
    </form>
  );
});

export default AddTodo;
