import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

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
          <li className="px-4 hover:text-white hover:border-2">Cart</li>
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
