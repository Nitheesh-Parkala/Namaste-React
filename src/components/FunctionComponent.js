import { useState } from "react";

const FunctionComponent = ({name,contact})=>{
  const[count, setCount] = useState(0)
    return (
      <div className="about">
        <h1>count:{count}</h1>
        <button onClick={()=>{
          setCount(count+1)
        }}>Increment</button>
        <h2>Name:{name}</h2>
        <h2>contact:{contact}</h2>
      </div>
    );
}
export default FunctionComponent;

// import { useState } from "react";

// const FunctionComponent = (props)=>{
//   const[about] = useState()
//     return (
//       <div className="about">
//         <h2>Name:{props.name}</h2>
//         <h2>contact:{contact}</h2>
//         <h2>addrerss:Udupi</h2>
//       </div>
//     );
// }
// export default FunctionComponent;