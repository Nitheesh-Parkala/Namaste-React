import React from "react"
import ReactDOM from "react-dom/client"

//React.createElement => object
//React Element.
const elem = <span>This is a Span tag</span>
const title = (
  <h1 className="head" tabIndex="1">
    {elem} 
    Namaste React using JSX by calling ...
  </h1>
);

//React Functional Component.
//Component Compositions: Composing Two components into one another.
const HeadingComponent = () => (
  <div>
    {title}
    <h1>Namaste react using functional Components.</h1>
  </div>
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeadingComponent />);
