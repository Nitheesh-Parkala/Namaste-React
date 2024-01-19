import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => object
//React Element.
const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX...
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX by calling ...
  </h1>
);

//React Functional Component.
//A function which return a jsx code or react element is called react functional components.
// const HeadingComponent =()=>{
//   <Title/>
//   return <h1>Namaste react using functional Components.</h1>
// }
// const root1 = ReactDOM.createRoot(document.getElementById("root"))
// root1.render(<HeadingComponent/>)

//Component Compositions: Composing Two components into one another.
const HeadingComponent = () => (
  <div>
    <Title />
    <h1>Namaste react using functional Components.</h1>
  </div>
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeadingComponent />);
