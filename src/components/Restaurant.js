import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurant = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  // console.log("resInfo", resInfo);

  if (resInfo === null) return <Shimmer />;

  const categories = resInfo.filter(
    (category) =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("categories", categories);

  return (
    <div className="text-center">
      <h3 className="font-body my-6 text-2xl">Restaurant Name</h3>
      <p className="font-body text-lg">Cuisines - A, B, C</p>
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
          key={category.card.card.categoryId}
        />
      ))}
    </div>
  );
};

export default Restaurant;
