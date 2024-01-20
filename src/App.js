import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

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

//Chunking
//code splitting
//Dynamic Bundling
//lazy laoding
//on demand loading
//dynamic import

const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      }, {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
