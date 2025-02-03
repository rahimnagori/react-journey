import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [restData, setRestData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const result =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(result);
    setRestData(result);
  };

  const handleClick = () => {
    const filteredRestaurant = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setRestData(filteredRestaurant);
  };

  console.log(restaurantList);

  const handleSearch = () => {
    const filteredRestaurant = restaurantList.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setRestData(filteredRestaurant);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button type="button" className="filter-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurants
        </button>
      </div>
      {restData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {restData.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
