import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/slices/cartSlice";
import ItemList from "./ItemList";
import { Link } from "react-router";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-9/12 m-auto">
        {cartItems.length ? (
          <button
            onClick={() => dispatch(clearCart())}
            className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
          >
            Clear Cart
          </button>
        ) : (
          <>
            <span className="text-red-300">Cart is empty. </span>
            <Link to="/" className="text-blue-400">
              Add items to cart
            </Link>
          </>
        )}

        {cartItems && <ItemList items={cartItems} />}
      </div>
    </div>
  );
};

export default Cart;
