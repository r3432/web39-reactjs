import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './reducers/CounterReducerSlice';

const Counter = () => {
//lay 1 gia tri bat ky trong store

const number=useSelector((state))


const dispatch=useDispatch();
  const handelIncrement= () =>{
    dispatch(increment(2))
  }


  const handelDecrement= ()=>{
    alert("224")
  }
  return (
    <>
    <button onClick={handelIncrement}>Increment</button>
    <button onClick={handelDecrement}>Decrement</button>
    <h1>{number.value}</h1>
    </>
  )
}

export default Counter
