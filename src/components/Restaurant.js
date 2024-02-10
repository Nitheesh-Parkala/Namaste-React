import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg  shadow-lg bg-gray-200 hover:bg-gray-300">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
    </div>
  );
};
export const itemOffer = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    return (
      <div className=" ">
        <label className="font-bold  absolute bg-blue-500 text-white rounded-lg p-2 m-4">
          {resData?.info?.aggregatedDiscountInfoV3?.header}
          <span> {resData?.info?.aggregatedDiscountInfoV3?.subHeader}</span>
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
