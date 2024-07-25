import React from 'react'

const ChildParentC = ({...content}) => {
  console.log(content)
  return (
    <div>
      child C
    </div>
  )
}

export default ChildParentC
