import ProductOrder from "./ProductOrder";
import Button from "./Button";

export default function OrderList() {
  return (
    <div className="order ">
      <ul className="order-lists">
        <ProductOrder />
      </ul>
      <div className="cost">
        <p>Order Total</p>
        <p className="total">$(X)</p>
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
