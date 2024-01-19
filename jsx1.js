import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => object

const heading = React.createElement("h1", { id: "heading" }, " Namaste react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);

//jsx-HTML-like or XML-k=like syntax
//jsx (transpiled before it reaches to the JS engine. and it is done by parcel and it is a manger but it is done by the package called babel)
//JSX=> React.createElement=>ReactElement-JS Object=>HTMLElement(render)-this all job done by the babel
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX...
  </h1>
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(jsxHeading);
console.log(jsxHeading);
//All about setting jsx and it is not called in html pls call if you want to run this code.