const heading = React.createElement(
  "h1",
  { id: "heading", xyx: "abc" }, //adding attribute here
  "Hello World From React !!"
);

console.log(heading); //here it will give the object and it will not give us html element.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
