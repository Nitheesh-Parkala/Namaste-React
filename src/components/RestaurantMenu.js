import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards: itemCards1 } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const { itemCards: itemCards2 } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.info?.categories || [];
  const { itemCards: itemCards3 } =
    (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.categories || [])[2] || [];
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className=" font-bold m-4 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category) => (
        <RestaurantCategory data ={category.card.card}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
