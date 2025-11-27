import ProductOrder from "./ProductOrder";
import Button from "./Button";

export default function OrderList({
  order,
  setQuantityWaffle,
  quantityWaffle,
  totalQuantity,
  // waffleTotalPrice,
  // productTotalPrice,
  removeProductOrder,
}) {
  const waffle = order[0];

  function NumberToString(num) {
    return String(num).length >= 3 ? num + "0" : num + ".00";
  }

  return (
    <div className={`order ${totalQuantity >= 1 ? "" : "hidden"}`}>
      <ul className="order-lists">
        <ProductOrder
          product={waffle}
          setQuantity={setQuantityWaffle}
          totalQuantity={totalQuantity}
          quantity={quantityWaffle}
          totalPrice={waffle.totalPrice}
          NumberToString={NumberToString}
          removeProductOrder={removeProductOrder}
        />
      </ul>
      <div className="cost">
        <p>Order Total</p>
        <p className="total">${NumberToString(waffle.totalPrice)}</p>
      </div>
      <div className="order-info">
        <p>
          <img src="./assets/images/icon-carbon-neutral.svg" alt="tree icon" />
          <span>
            This is a <strong>carbon-neutral</strong> delivery
          </span>
        </p>
      </div>
      <div className="order-btn">
        <Button>Confirm Order</Button>
      </div>
    </div>
  );
}
