import RestaurantCard from "../components/Restaurant";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //Local State Variable = Super powerful variable.
  const [listOfRestaurants, setListofRestaturants] = useState([resList]);
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
