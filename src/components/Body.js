import RestaurantCard from "../components/Restaurant";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  //Local State Variable = Super powerful variable.
  const [listOfRestaurants, setListofRestaturants] = useState([]);

          useEffect(()=>{
            // console.log("When Body component is rendered useEffect will rendered") 
            fetchData();
          })  
          // console.log("Body rendered")

          const fetchData = async () => {
            const data = await fetch(
              "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            console.log(json)

            // Here we should use optional chaining
            setListofRestaturants(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
          };
  return (
     <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filtered logic here...
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaturants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {/* Restru component we have to do separte. */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />    /* Getting error in Key ={restaurant.info.id}  */

        ))}
      </div>
    </div>
  );
};

export default Body;
