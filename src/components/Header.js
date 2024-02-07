import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Got Rendered...");

  /**
   *  useEffect is called every time the component render
   * dependency array changes the behavior of the  render->[]
   * If No dependency array => useEffect is called on every render.
   * if there is empty [] dependency => useEffect is called on initial render
   * (just once when the component called one time if it render once again but useEffect is not called again and again)
   * if there something on the dependency array is [btnNameReact] => useEffect is called everytime it's updated
   */
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex  justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 ">
      <div className="logo-container">
        <img className=" w-28 justify-center  m-4 p-2 " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className=" flex m-4 p-2  space-x-6 text-lg font-bold  ">
          <li>Online Status: {onlineStatus ? "online" : "offline"}</li>
          <li className="hover:underline">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/grocery ">Grocery</Link>
          </li>
          <li className="hover:underline">
            <Link to="/about">About US</Link>
          </li>
          <li className="hover:underline">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:underline">Cart</li>
          <button
            className="text-white bg-blue-400 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
