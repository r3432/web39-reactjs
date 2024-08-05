import React, { useState, useEffect } from 'react';

import TodoList from './Component/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = (text) => {
    fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })
      .then(response => response.json())
      .then(newTodo => setTodos([...todos, newTodo]));
  };

  const editTodo = (id, newText) => {
    fetch(`http://localhost:5000/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newText })
    })
      .then(response => response.json())
      .then(updatedTodo => {
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
      });
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:5000/api/todos/${id}`, { method: 'DELETE' })
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
