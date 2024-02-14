import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-2 p-2 ">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="w-6/12 justify-center m-auto p-2 ">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
        {cartItems.length === 0 && <h1>Your Cart Is Empty PLS ADD THE ITEM</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
