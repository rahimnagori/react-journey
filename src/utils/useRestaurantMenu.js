import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
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
  return resInfo;
};

export default useRestaurantMenu;
