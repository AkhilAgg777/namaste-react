import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex,dummy}) => {
  // const [showItems, setShowItems] = useState(false);
  // //console.log(data);
  const handleClick = () => {
    //setShowItems(!showItems);
    //console.log("Clicked");
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onclick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⏬</span>
          {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
        </div>
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
