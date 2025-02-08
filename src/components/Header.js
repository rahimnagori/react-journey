import { useContext } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div>
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 hover:text-white hover:border-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-white hover:border-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-white hover:border-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-white hover:border-2 font-bold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-4 hover:text-white hover:border-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            {loggedInUser}
            <span
              className={`inline-block w-[15px] h-[15px] rounded-2xl mx-1 ${
                onlineStatus ? "bg-green-600" : "bg-red-600"
              }`}
            ></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
