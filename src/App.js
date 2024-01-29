import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//importing components here.
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/ErrorPage";
const AppLayOut = ()=>{
    return (
      <div className="app">
        <Header />
        <Outlet/>  
        {/* all the outlet will be filled according to the path */}
        {/** if path = / */}
        {/** if path = /about */}
        {/** if path = /contact */} 
      </div>
    );
}
const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<AppLayOut/>,
  children:[
    {
  path: "/",
  element: <Body/>
    },
    {
  path: "/about",
  element:<About/>,
 
},
{
  path: "/contact",
  element:<Contact/> 
},
  ],
  errorElement: <Error/>
},
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
