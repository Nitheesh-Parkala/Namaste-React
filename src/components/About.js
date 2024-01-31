import FunctionComponent from "./FunctionComponent";
import UserClass from "./UserClass"
const About = ()=>{
    return (
      <div>
        <h1>About Us</h1>
        {/* <FunctionComponent
          name={"Nitheesh (function)"}
          contact={"9845684599(f)"}
        /> */}
        <UserClass name={"Nitheesh (class)"} contact={"9845684599(class)"} />
      </div>
    );
}

export default About;