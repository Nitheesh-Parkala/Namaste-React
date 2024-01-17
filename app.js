/**
 * <div id="parent">
 *      <div id= "child">
 *           <h1></h1>
 *      </div>
 * </div>
 * ReactElement
 */

const parent = React.createElement("div",{id: "parent"},
 React.createElement("div",{id: "child"}, React.createElement("h1",{},"Hi Im h1 Tag")))

 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(parent)