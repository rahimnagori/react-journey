import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [restData, setRestData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
    console.log("restaurants", result);
  };

  const handleClick = () => {
    const filteredRestaurant = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setRestData(filteredRestaurant);
  };

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
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            type="button"
            className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer hover:bg-black hover:text-green-400"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex item-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 cursor-pointer  hover:bg-black hover:text-gray-400"
            onClick={handleClick}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {restData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap rounded-lg">
          {restData.map((restaurant, index) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              className=""
              key={restaurant.info.id}
            >
              {index % 2 === 0 ? (
                <RestaurantCardPromoted resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
