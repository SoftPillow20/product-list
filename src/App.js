import data from "./data.json";
import ShoppingList from "./components/ShoppingList";
import Products from "./components/Products";
import Product from "./components/Product";
import IsEmptyCart from "./components/IsEmptyCart";
import ShoppingCart from "./components/ShoppingCart";
import Order from "./components/Order";
import OrderList from "./components/OrderList";
import OrderCost from "./components/OrderCost";
import OrderInfo from "./components/OrderInfo";
import ProductOrder from "./components/ProductOrder";
import OrderBtn from "./components/OrderBtn";
import ProductOrderDetails from "./components/ProductOrderDetails";

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

function ConfirmOrderModal({ children }) {
  return <div className="confirm-order-modal">{children}</div>;
}

function Modal({ children }) {
  return (
    <dialog className="modal">
      <div>
        <img
          src="./assets/images/icon-order-confirmed.svg"
          alt="order confirmed icon"
        />
      </div>
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      {children}
    </dialog>
  );
}

function ConfirmProductOrders({
  productName,
  productQuantity,
  productPrice,
  productTotalPrice,
  numToString,
  productThumbnail,
}) {
  console.log(productThumbnail);
  return (
    <>
      <div>
        <img src={productThumbnail} alt={productName} />
        <div>
          <p className="product-name">{productName}</p>
          <p className="product-pricing-info">
            <span className="quantity">{productQuantity}x</span>
            <span className="text-light">${numToString(productPrice)}</span>
          </p>
        </div>
      </div>
      <span className="overall-price">${numToString(productTotalPrice)}</span>
    </>
  );
}

function NewOrderBtn({ onResetOrder }) {
  return (
    <div className="order-btn">
      <button onClick={() => onResetOrder()}>Start New Order</button>
    </div>
  );
}

export default App;
