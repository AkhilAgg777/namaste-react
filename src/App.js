import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


/**
 * Header
 * -Logo
 * Nav items
 * Body
 * -Search
 * -RestaurantContainer
 *   -RestaurantCard
 *    -Img
 *    -Name of Res,star rating,cusine,delivery time etc
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 *
 */



// const styleCard={
//   backgroundColor:"#f0f0f0"
// }






const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
