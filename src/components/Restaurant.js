import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  console.log("resInfo", resInfo);

  if (resInfo === null) return <Shimmer />;

  return (
    <div>
      <h3>Menu Loaded</h3>
    </div>
  );
};

export default Restaurant;
