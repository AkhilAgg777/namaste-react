import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //local State Variable-super powerful variable
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = data.json();
    console.log(json);
    //optional chaining
    setlistOfRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // //conditional rendering
  // if(listOfRestaurants?.length===0){
  //   return <Shimmer/>
  // }

  // //Normal JS Variable
  // let listOfRestaurants=[];

  //Normal JS Variable
  let listOfRestaurantsJS = [
    {
      info: {
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
      },
    },
    {
      info: {
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
      },
    },
    {
      info: {
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
      },
    },
  ];

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurant cards and update the UI
              //searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants?.filter((info) =>
                info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            const filteredList = listOfRestaurants?.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
