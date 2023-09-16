import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //local State Variable-super powerful variable
  const [listOfRestaurants,setlistOfRestaurants] = useState(resList);

  // //Normal JS Variable
  // let listOfRestaurants=[];

  //Normal JS Variable
  let listOfRestaurantsJS = [
      {info: {
        id: "348458",
        name: "Grover Sweets",
        cloudinaryImageId: "a0rbyaqiqfwkdd7fcc5w",
        costForTwo: "₹250 for two",
        cuisines: [
          "Indian",
          "Sweets",
          "North Indian",
          "Snacks",
          "Street Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4,
      }},
      {info: {
        id: "348459",
        name: "Dominos",
        cloudinaryImageId: "a0rbyaqiqfwkdd7fcc5w",
        costForTwo: "₹250 for two",
        cuisines: [
          "Indian",
          "Sweets",
          "North Indian",
          "Snacks",
          "Street Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.5,
      }},
      {info: {
        id: "348460",
        name: "MCD",
        cloudinaryImageId: "a0rbyaqiqfwkdd7fcc5w",
        costForTwo: "₹250 for two",
        cuisines: [
          "Indian",
          "Sweets",
          "North Indian",
          "Snacks",
          "Street Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
      }},
    
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((info) => (
          <RestaurantCard key={info.id} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
