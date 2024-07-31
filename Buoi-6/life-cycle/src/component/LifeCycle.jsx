import React from "react";

class LifeCycle  extends React.Component{
constructor(props){
super(props)
//tao ra 1 trang thai ;

this.state={color:"red"}




}

componentDidMount(){
  setTimeout(()=>{
    this.state=({color:"blue"})
  }, 3000);
}

  render() {
// console.log(this.state.color)


  return <h1 style={{color:this.state.color}}>asdd</h1>
  }
}

export default LifeCycle