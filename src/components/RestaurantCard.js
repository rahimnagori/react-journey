import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } = resData;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-300 hover:bg-gray-500">
      <img
        alt={name}
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-body py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>38 mins</h4> */}
    </div>
  );
};

export default RestaurantCard;
