import OrderList from "./OrderList";
import IsEmptyCart from "./IsEmptyCart";

export default function ShoppingCart({
  order,
  totalQuantity,
  quantityWaffle,
  waffleTotalPrice,
  productTotalPrice,
  removeProductOrder,
  setQuantityWaffle,
}) {
  return (
    <div className="shopping-cart bg-light">
      <h2 className="text-red">Your Cart ({Number(totalQuantity)})</h2>
      <OrderList
        order={order}
        setQuantityWaffle={setQuantityWaffle}
        quantityWaffle={quantityWaffle}
        totalQuantity={totalQuantity}
        // waffleTotalPrice={waffleTotalPrice}
        // productTotalPrice={productTotalPrice}
        removeProductOrder={removeProductOrder}
      />
      <IsEmptyCart totalQuantity={totalQuantity} />
    </div>
  );
}
