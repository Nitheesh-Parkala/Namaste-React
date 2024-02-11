import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [isExpanded, setIsExpanded] = useState(showItems);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex  justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="font-bold"> ↓ </span>
        </div>
        {/* Items List */}
        {isExpanded && showItems && <ItemList items={data.itemCards} />}
        {/* Use isExpanded and showItems */}
      </div>
    </div>
  );
};

export default RestaurantCategory;
