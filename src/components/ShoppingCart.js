import OrderList from "./OrderList";
import IsEmptyCart from "./IsEmptyCart";

export default function ShoppingCart() {
  return (
    <div className="shopping-cart bg-light">
      <h2 className="text-red">Your Cart (0)</h2>
      <OrderList />
      <IsEmptyCart />
    </div>
  );
}
