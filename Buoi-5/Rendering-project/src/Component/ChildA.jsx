import React from 'react'

const ChildA = ({array}) => {


 
//check array ton tai gia tri hay ko
if(array.length < 0) {
  return <p>ko ton tai gia tri</p>
}
  return (
  <>
{array.map((item,index) => {
// console.log(item);
// console.log(index);
return(
  <h1 key={index}> {item.name}</h1>
)
})};

  </>
  )
}

export default ChildA
