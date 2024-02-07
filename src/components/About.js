// import { render } from "react-dom";
import FunctionComponent from "./FunctionComponent";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    // console.log("parent constructor")
  }
  componentDidMount() {
    // console.log("parent Component");
  }
  render() {
    // console.log("parent render")+
    return (
      <div>
        <h1 className="font-bold text-lg m-4  p-4">About Us</h1>
        <UserClass name={"Nitheesh (class)"} contact={"9845684599(class)"} />
      </div>
    );
  }
}

// const About = ()=>{
//     return (
//       <div>
//         <h1>About Us</h1>
//         {/* <FunctionComponent
//           name={"Nitheesh (function)"}
//           contact={"9845684599(f)"}
//         /> */}
//         <UserClass name={"Nitheesh (class)"} contact={"9845684599(class)"} />
//       </div>
//     );
// }

export default About;
