import ProductOrder from "./ProductOrder";

export default function Order({
  order,
  setQuantityWaffle,
  quantityWaffle,
  totalQuantity,
  removeProductOrder,
}) {
  const waffle = order[0];

  function numberToString(num) {
    return String(num).length >= 3 ? num + "0" : num + ".00";
  }

  return (
    <div className={`order ${totalQuantity >= 1 ? "" : "hidden"}`}>
      <OrderList>
        <ProductOrder
          product={waffle}
          setQuantity={setQuantityWaffle}
          totalQuantity={totalQuantity}
          quantity={quantityWaffle}
          totalPrice={waffle.totalPrice}
          numberToString={numberToString}
          removeProductOrder={removeProductOrder}
        />
      </OrderList>
      <Cost waffle={waffle} numberToString={numberToString} />
      <OrderInfo />
      <OrderBtn />
    </div>
  );
}

function OrderList({ children }) {
  return <ul className="order-lists">{children}</ul>;
}

function Cost({ waffle, numberToString }) {
  return (
    <div className="cost">
      <p>Order Total</p>
      <p className="total">${numberToString(waffle.totalPrice)}</p>
    </div>
  );
}

function OrderInfo() {
  return (
    <div className="order-info">
      <p>
        <img src="./assets/images/icon-carbon-neutral.svg" alt="tree icon" />
        <span>
          This is a <strong>carbon-neutral</strong> delivery
        </span>
      </p>
    </div>
  );
}

function OrderBtn() {
  return (
    <div className="order-btn">
      <button>Confirm Order</button>
    </div>
  );
}
