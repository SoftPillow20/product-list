import Order from "./Order";
import IsEmptyCart from "./IsEmptyCart";

export default function ShoppingCart({
  order,
  totalQuantity,
  quantityWaffle,
  removeProductOrder,
  setQuantityWaffle,
}) {
  return (
    <div className="shopping-cart bg-light">
      <h2 className="text-red">Your Cart ({Number(totalQuantity)})</h2>
      <Order
        order={order}
        setQuantityWaffle={setQuantityWaffle}
        quantityWaffle={quantityWaffle}
        totalQuantity={totalQuantity}
        removeProductOrder={removeProductOrder}
      />
      <IsEmptyCart totalQuantity={totalQuantity} />
    </div>
  );
}
