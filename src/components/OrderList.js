import ProductOrder from "./ProductOrder";
import Button from "./Button";

export default function OrderList({
  order,
  quantityWaffle,
  waffleTotalPrice,
  productTotalPrice,
}) {
  function NumberToString(num) {
    return String(num).length >= 3 ? num + "0" : num + ".00";
  }

  return (
    <div className={`order ${order.length >= 1 ? "" : "hidden"}`}>
      <ul className="order-lists">
        <ProductOrder
          order={order}
          quantityWaffle={quantityWaffle}
          waffleTotalPrice={waffleTotalPrice}
          NumberToString={NumberToString}
        />
      </ul>
      <div className="cost">
        <p>Order Total</p>
        <p className="total">$({NumberToString(productTotalPrice)})</p>
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
