import RestaurantCard from "../components/Restaurant";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">SerachBar</div>
      <div className="res-container">
        {/* Restru component we have to do separte. */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
