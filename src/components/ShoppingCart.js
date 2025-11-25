import OrderList from "./OrderList";
import IsEmptyCart from "./IsEmptyCart";

export default function ShoppingCart({
  order,
  quantityWaffle,
  waffleTotalPrice,
  productTotalPrice,
}) {
  return (
    <div className="shopping-cart bg-light">
      <h2 className="text-red">Your Cart ({Number(order.length)})</h2>
      <OrderList
        order={order}
        quantityWaffle={quantityWaffle}
        waffleTotalPrice={waffleTotalPrice}
        productTotalPrice={productTotalPrice}
      />
      <IsEmptyCart order={order} />
    </div>
  );
}
