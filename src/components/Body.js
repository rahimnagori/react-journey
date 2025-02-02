import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from "../../restaurants.json";
const resList =
  resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

const Body = () => {
  const [restaurantList] = useState(resList);
  const [restData, setRestData] = useState(resList);

  const handleClick = () => {
    const filteredRestaurant = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setRestData(filteredRestaurant);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
