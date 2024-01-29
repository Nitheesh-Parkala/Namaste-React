import { useState} from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
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

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
          <Link to="/">Home</Link>
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