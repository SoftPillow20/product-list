import OrderList from "./OrderList";
import OrderCost from "./OrderCost";
import OrderInfo from "./OrderInfo";
import ProductOrder from "./ProductOrder";
import OrderBtn from "./OrderBtn";

export default function Order({ order }) {
  return (
    <div className="order ">
      <OrderList>
        {order.map((item) =>
          item.quantity ? (
            <ProductOrder
              productName={item.name}
              productPrice={item.price}
              productQuantity={item.quantity}
              productTotalPrice={item.totalPrice}
              key={item.name}
            />
          ) : null
        )}
      </OrderList>
      <OrderCost />
      <OrderInfo />
      <OrderBtn />
    </div>
  );
}
