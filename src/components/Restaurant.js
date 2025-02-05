import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
const Restaurant = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const newRestaurantMenus =
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setResInfo(newRestaurantMenus);
  };

  console.log("resInfo", resInfo);

  if (resInfo === null) return <Shimmer />;

  return (
    <div>
      <h3>Load menu</h3>
    </div>
  );
};

export default Restaurant;
