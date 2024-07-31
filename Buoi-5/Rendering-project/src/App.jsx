import React from 'react'
import ChildA from './Component/ChildA'
import ChildB from './Component/ChildB';

import ChildC from './Component/ChildC';

import ChildD from './Component/ChildD';

const App = () => {

  const array=[
    {
      id:1,
      name:"linh"
    },
    {
      id:2,
      name:"anh"
    }
  ];

  const star=3;

  return (
    <div>
      

      {/* render theo dieu kien if else */}

      <ChildA array={array}/>

      {/* render theo toan tu 3 ngoi  */}

      <ChildB array={array}/>


      {/* render theo toan tu && */}
      <ChildC array={array}/>


      <ChildD star={star}/>
    </div>
  )
}

export default App
