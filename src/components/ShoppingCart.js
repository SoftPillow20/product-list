import OrderList from "./OrderList";
import IsEmptyCart from "./IsEmptyCart";

export default function ShoppingCart({
  waffle,
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
        waffle={waffle}
        setQuantityWaffle={setQuantityWaffle}
        totalQuantity={totalQuantity}
        quantityWaffle={quantityWaffle}
        waffleTotalPrice={waffleTotalPrice}
        productTotalPrice={productTotalPrice}
        removeProductOrder={removeProductOrder}
      />
      <IsEmptyCart totalQuantity={totalQuantity} />
    </div>
  );
}
