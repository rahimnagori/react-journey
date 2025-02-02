import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } = resData;
  return (
    <div className="res-card">
      <img
        alt="Meghana Food"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>38 mins</h4> */}
    </div>
  );
};

export default RestaurantCard;
