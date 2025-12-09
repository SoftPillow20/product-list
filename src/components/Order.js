import OrderList from "./OrderList";
import OrderCost from "./OrderCost";
import OrderInfo from "./OrderInfo";
import ProductOrder from "./ProductOrder";
import OrderBtn from "./OrderBtn";

export default function Order() {
  return (
    <div className="order ">
      <OrderList>
        <ProductOrder />
      </OrderList>
      <OrderCost />
      <OrderInfo />
      <OrderBtn />
    </div>
  );
}
