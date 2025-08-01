import React, { useState, useRef, useCallback, useMemo, useEffect, useLayoutEffect} from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItems';
import { useTheme } from './ThemeContext';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoRef = useRef();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (addTodoRef.current) {
      addTodoRef.current.focusInput();
    }
  }, []);

  const handleAddTodo = useCallback((text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }, []);

  const completedCount = useMemo(() => {
    return todos.filter(todo => todo.completed).length;
  }, [todos]);

  const styles = {
    backgroundColor: theme === 'dark' ? '#121212' : '#f9f9f9',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    minHeight: '100vh',
    padding: '20px',
    transition: '0.3s',
  };

  return (
    <div style={styles}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
      </button>

      <h2>📝 Advanced Todo App</h2>

      <AddTodo ref={addTodoRef} onAdd={handleAddTodo} />

      <div style={{ marginTop: '20px' }}>
        {todos.length === 0 && <p>No todos added yet.</p>}
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <strong>Total Todos:</strong> {todos.length} <br />
        <strong>Completed:</strong> {completedCount}
      </div>
    </div>
  );
}

export default App;
