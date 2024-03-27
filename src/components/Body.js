import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //local State Variable-super powerful variable
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //console.log("Body Rendered", listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=28.6190347&lng=77.0640016"
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6190347&lng=77.0640016"
    );
    const json = data.json();

    //optional chaining
    setlistOfRestaurant(
      json?.data?.cards[3]?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[3]?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline.Please check your internet connection</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

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
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div search m-4 p-4 flex items-center>
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
        <div search m-4 p-4 flex items-center>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>UserName:</label>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
