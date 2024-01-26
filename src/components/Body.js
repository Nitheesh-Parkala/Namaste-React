import RestaurantCard from "../components/Restaurant";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //Local State Variable = Super powerful variable.
  const [listOfRestaurants, setListofRestaturant] = useState([]);

  const [searchText, setSearchText] = useState("");
  // whenever State variable update,react  triggers a reconciliation cycle(will re render the component)
  console.log("Body rerender");
   const [filteredRestaurant, setFilteredRestaurant] = useState([])

  useEffect(() => {
    // console.log("When Body component is rendered useEffect will rendered")
  fetchData()
  },[]);
  // console.log("Body rendered")

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    
    // Here we should use optional chaining
    setListofRestaturant(
      json?.data?.cards[4]?.card?.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card.gridElements.infoWithStyle.restaurants
    );
  };
  // Conditional Rendering - Rendering the page based on the condition.
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  //  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="Search-Box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {
          // filter the restaurant ard and update the UI
       const filteredRestaurant =   listOfRestaurants.filter(
            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
          )
          setFilteredRestaurant(filteredRestaurant)
          //SearchText
          console.log(searchText)
             }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filtered logic here...
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaturant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {/* Restru component we have to do separte. */}

        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          /> /* Getting error in Key ={restaurant.info.id}  */
        ))}
      </div>
    </div>
  );
};

export default Body;
