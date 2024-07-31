import React from 'react'

const ChildD = ({star}) => {


const rating ={
  3:"tuyet voi",
  2:"binh thuong",
  1:"....sss"
}

// console.log(rating[3])
  return (
    <div>
      {rating[star]}
    </div>
  )
}

export default ChildD
