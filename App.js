import React from "react";
import ReactDOM from "react-dom/client";
import resData from "./restaurants.json";

/**
 * * Better Comments extension
 * !Wow
 * ? hello
 * TODO: Do this bro
 */

/**
 * Header
 *  * Logo
 *  * NavItems
 * Body
 *  * SearchBar
 *  * CardContainer
 *  * * RestaurantCard
 *        - Img
 *        - Name of Res, Star rating, Cuisine, delivery time.
 * Footer
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } = resData;
  return (
    <div className="res-card">
      <img
        alt="Meghana Food"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>38 mins</h4> */}
    </div>
  );
};

const resList =
  resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
console.log(resList);

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

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
