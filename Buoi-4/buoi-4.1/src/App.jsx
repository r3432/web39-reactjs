import React from 'react'
import ChildParent from './cpmpunents/ChildParent'
import ChildParentB from './cpmpunents/ChildParentB';
import ChildParentC from './cpmpunents/ChildParentC';

import ChildParentF from './cpmpunents/ChildParentF';

const App = () => {

  const name= "anh" ;

  const email= "anh@gamil.com" ;
const content ={
  title:"post 1",
  author:"dlinh",
  infor:"llll"
}



  return (
   <>
   
   <ChildParent  data={name} email={email}/>
{/* data: la prop minh dat ten,name la gia tri truyen vao component */}

{/* ben conponent con truyen {prop} gop vao de hien thi gia tri  */}
   <ChildParentB data={name} />

   <ChildParentC {...content}/>


   <ChildParentF  a={5}/>
   </>
  )
}

export default App
