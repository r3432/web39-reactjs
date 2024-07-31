import React from 'react'

const ChildC = ({array}) => {


  const lengtharr=array.length;
  console.log(lengtharr)
  return (
  <>
  {
    lengtharr && array.map((value,index)=>{
      return <h1 key={index}>{value.name}</h1>
    })
  }
  </>
  )
}

export default ChildC
