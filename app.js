/**
 * <div id="parent">
 *      <div id= "child1">
 *           <h1></h1>
 *           <h2></h2>
 *      </div>
 * <div id= "child2">
 *           <h1></h1>
 *           <h2></h2>
 *      </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understands)
 */
import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement(
  "div",
  { id: "parent" },
    React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi Im h1 Tag"),
    React.createElement("h2", {}, "Hi Im h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi Im h1 Tag"),
    React.createElement("h2", {}, "Hi Im h2 Tag"),
  ]) //if i you want to give two element has  a siblings then you have to create a array[]
);

//jsx is exist to reduce the above complex code.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
