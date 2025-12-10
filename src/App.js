import data from "./data.json";
import ShoppingList from "./components/Shopping List/ShoppingList";
import Products from "./components/Shopping List/Products";
import Product from "./components/Shopping List/Product";
import IsEmptyCart from "./components/Shopping Cart/IsEmptyCart";
import ShoppingCart from "./components/Shopping Cart/ShoppingCart";
import Order from "./components/Shopping Cart/Order";
import OrderList from "./components/Shopping Cart/OrderList";
import OrderCost from "./components/Shopping Cart/OrderCost";
import OrderInfo from "./components/Shopping Cart/OrderInfo";
import ProductOrder from "./components/Shopping List/ProductOrder";
import OrderBtn from "./components/Shopping Cart/OrderBtn";
import ProductOrderDetails from "./components/Shopping List/ProductOrderDetails";
import Modal from "./components/Modal/Modal";
import ConfirmOrderModal from "./components/Modal/ConfirmOrderModal";
import ConfirmProductOrders from "./components/Modal/ConfirmProductOrders";
import NewOrderBtn from "./components/Modal/NewOrderBtn";

import { useState } from "react";

function App() {
  const [order, setOrder] = useState(data);
  const [confirmOrder, setConfirmOrder] = useState(false);

  function onSetOrder(currItem) {
    setOrder((item) =>
      item.map((order) =>
        order.name === currItem
          ? {
              ...order,
              price: order.price,
              totalPrice: order.price,
              quantity: 1,
            }
          : order
      )
    );
  }

  function IncreaseQuantityProduct(currItem) {
    setOrder((item) =>
      item.map((order) =>
        order.name === currItem
          ? {
              ...order,
              totalPrice: order.price * (order.quantity + 1),
              quantity: order.quantity + 1,
            }
          : order
      )
    );
  }

  function DecreaseQuantityProduct(currItem) {
    setOrder((item) =>
      item.map((order) =>
        order.name === currItem
          ? {
              ...order,
              quantity: order.quantity - 1,
              totalPrice: order.totalPrice - order.price,
            }
          : order
      )
    );
  }

  function getOrderQuantity() {
    const allOrder = order.reduce(
      (acc, item) => (item.quantity ? Number(item.quantity) + acc : 0 + acc),
      0
    );
    return allOrder;
  }

  function numToString(num) {
    return !String(num).includes(".") ? num + ".00" : num + "0";
  }

  function onResetProduct(product) {
    setOrder((item) =>
      item.map((data) =>
        data.name === product ? { ...data, quantity: 0, totalPrice: 0 } : data
      )
    );
  }

  function onResetOrder() {
    setOrder((item) =>
      item.map((data) =>
        data.quantity ? { ...data, quantity: 0, totalPrice: 0 } : data
      )
    );
    setConfirmOrder(false);
  }

  return (
    <main className="grid shopping-component">
      {confirmOrder && (
        <ConfirmOrderModal>
          <Modal>
            <Order>
              <OrderList>
                {order.map((item) =>
                  item.quantity ? (
                    <ProductOrder key={item.name}>
                      <ConfirmProductOrders
                        productName={item.name}
                        productPrice={item.price}
                        productQuantity={item.quantity}
                        productTotalPrice={item.totalPrice}
                        productThumbnail={item.image.thumbnail}
                        numToString={numToString}
                      />
                    </ProductOrder>
                  ) : null
                )}
              </OrderList>
              <OrderCost order={order} numToString={numToString} />
            </Order>
            <NewOrderBtn onResetOrder={onResetOrder} />
          </Modal>
        </ConfirmOrderModal>
      )}
      <ShoppingList>
        <Products>
          {data.map((product) => (
            <Product
              order={order}
              onSetOrder={onSetOrder}
              IncreaseQuantityProduct={IncreaseQuantityProduct}
              DecreaseQuantityProduct={DecreaseQuantityProduct}
              image={product.image.desktop}
              name={product.name}
              category={product.category}
              price={product.price}
              key={product.name}
            />
          ))}
        </Products>
      </ShoppingList>
      <ShoppingCart getOrderQuantity={getOrderQuantity}>
        {getOrderQuantity() ? (
          <Order>
            <OrderList>
              {order.map((item) =>
                item.quantity ? (
                  <ProductOrder key={item.name}>
                    <ProductOrderDetails
                      productName={item.name}
                      productPrice={item.price}
                      productQuantity={item.quantity}
                      productTotalPrice={item.totalPrice}
                      numToString={numToString}
                      onResetProduct={onResetProduct}
                    />
                  </ProductOrder>
                ) : null
              )}
            </OrderList>
            <OrderCost order={order} numToString={numToString} />
            <OrderInfo />
            <OrderBtn setConfirmOrder={setConfirmOrder} />
          </Order>
        ) : (
          <IsEmptyCart />
        )}
      </ShoppingCart>
    </main>
  );
}

export default App;
