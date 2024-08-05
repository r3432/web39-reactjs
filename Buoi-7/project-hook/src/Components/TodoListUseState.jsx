import React from 'react'
import { useState } from 'react'

const TodoListUseState = () => {

  const[todos,setTodos]=useState([])
const handelTask =()=>{
  //tao mang moi ,sao chep mang cu va them gia tri "new task" moi lan bam
const newTask=[...todos,'newTask'];
setTodos(newTask)
}

return (
  <>
    <button onClick={handelTask}>Add Task1</button>
    <ul>
      {todos.length > 0 && todos.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  </>
);
}

export default TodoListUseState
