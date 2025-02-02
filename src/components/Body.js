import RestaurantCard from "./RestaurantCard";
import resData from "../../restaurants.json";
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

export default Body;
