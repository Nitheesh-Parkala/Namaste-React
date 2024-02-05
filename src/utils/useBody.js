import { useEffect, useState } from "react";
import { API } from "./constants"; // Adjust the import path based on your project structure

const useBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API);
      const json = await data.json();

      // Use optional chaining to handle potential null or undefined values
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return {
    listOfRestaurants,
    searchText,
    setSearchText,
    filteredRestaurant,
  };
};

export default useBody;
