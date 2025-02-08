import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../store/slices/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                onClick={() => dispatch(addItem(item))}
                className="p-2 bg-black text-white mx-16 rounded-lg shadow-lg m-auto cursor-pointer"
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
