import OrderList from "./OrderList";
import OrderCost from "./OrderCost";
import OrderInfo from "./OrderInfo";
import ProductOrder from "./ProductOrder";
import OrderBtn from "./OrderBtn";

export default function Order({ order, setOrder }) {
  function numToString(num) {
    return !String(num).includes(".") ? num + ".00" : num + "0";
  }

  return (
    <div className="order ">
      <OrderList>
        {order.map((item) =>
          item.quantity ? (
            <ProductOrder
              setOrder={setOrder}
              numToString={numToString}
              productName={item.name}
              productPrice={item.price}
              productQuantity={item.quantity}
              productTotalPrice={item.totalPrice}
              key={item.name}
            />
          ) : null
        )}
      </OrderList>
      <OrderCost order={order} numToString={numToString} />
      <OrderInfo />
      <OrderBtn />
    </div>
  );
}
