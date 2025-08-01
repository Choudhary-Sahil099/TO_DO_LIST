import React from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;