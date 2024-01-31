import React, { useState } from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
      count2:2
    }
  }
 render(){
  const {name,contact} = this.props;
  const {count,count2}= this.state;
  return (
    <div className="about">
      <h1>Count:{count}</h1>
      <button onClick={()=>{
            this.setState({
              count:this.state.count+1,
              count2:this.state.count2 + 1
            })
      }}>Increase the count</button>
      <h1>Count:{count2}</h1>
      <h2>Name:{name}</h2>
      <h2>contact:{contact}</h2>
    </div>
  );
 }
}
export default UserClass;