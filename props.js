import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTeCjHOeaBtOLYRJ0LdiG2-B49dfnEULULA&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  console.log(props);
  // we can try another apporach
//   const RestaurantCard =({resName,cusines})=>{
    
//   } or
//  const RestaurantCard =(props)=>{
//     const {resName,cusines}=props
//   }

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-img"
        src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cusines}</h4>
      <h4>4.5 star</h4>
      <h4>26 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">SerachBar</div>
      <div className="res-container">
        {/* Restru component we have to do separte. */}
        <RestaurantCard resName="KFC" cusines="chicken" />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
