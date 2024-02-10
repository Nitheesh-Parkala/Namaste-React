import RestaurantCard, { itemOffer } from "../components/Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const {
    listOfRestaurants,
    setListOfRestaurants,
    searchText,
    setSearchText,
    filteredRestaurant,
    setFilteredRestaurant,
  } = useBody();
  const RestaurantOffer = itemOffer(RestaurantCard);
  // checking the discount in browser to create a HOF
  // console.log(listOfRestaurants);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>looks like your offline</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border hover:border-solid border-2 border-sky-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // filter the restaurant ard and update the UI
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
              //SearchText
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 xp-4 flex items-center">
          <button
            className="px-4 py-2 bg-blue-100 m-4 rounded-lg"
            onClick={() => {
              //filtered logic here...
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {/* Restru component we have to do separte. */}

        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {
              /* if the restaurant is having discount show that discount other wise show normal card */
              restaurant?.info?.aggregatedDiscountInfoV3 ? (
                <RestaurantOffer resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link> /* Getting error in Key ={restaurant.info.id}  */
        ))}
      </div>
    </div>
  );
};

export default Body;
