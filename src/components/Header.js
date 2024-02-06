import { useState} from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
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
    <div className="flex  justify-between ">
      <div className="logo-container">
        <img className="w-56 justify-center  m-4 p-2 " src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex m-4 p-2 justify-center space-x-6 text-lg font-bold">
          <li>Online Status: {onlineStatus ? "online" : "offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
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