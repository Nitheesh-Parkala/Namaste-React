import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch on action.
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-black-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-lg font-bold">
                {item?.card?.info?.name}
              </span>
              <span className="font-bold">
                ₹- {item?.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
            {/* Container for image and button */}
            <div className="relative">
              {/* Image */}
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
              {/* Button positioned at the bottom center */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <button
                  className="p-2 bg-black text-white text-center rounded-lg"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
