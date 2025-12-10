import data from "./data.json";
import ShoppingList from "./components/ShoppingList";
import Products from "./components/Products";
import Product from "./components/Product";
import IsEmptyCart from "./components/IsEmptyCart";
import ShoppingCart from "./components/ShoppingCart";
import Order from "./components/Order";

import { useState } from "react";

function App() {
  const [order, setOrder] = useState(data);
  const [confirmOrder, setConfirmOrder] = useState(false);

  function onSetOrder(currItem) {
    setOrder((item) =>
      item.map((order) =>
        order.name === currItem
          ? {
              name: order.name,
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

  return (
    <main className="grid shopping-component">
      {confirmOrder && <ConfirmOrderModal />}
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
          <Order
            order={order}
            setOrder={setOrder}
            setConfirmOrder={setConfirmOrder}
          />
        ) : (
          <IsEmptyCart />
        )}
      </ShoppingCart>
    </main>
  );
}

function ConfirmOrderModal() {
  return (
    <div className="confirm-order-modal">
      <div className="modal">
        <div>
          <img
            src="./assets/images/icon-order-confirmed.svg"
            alt="order confirmed icon"
          />
        </div>
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <div className="order">
          <ul className="order-lists">
            <li className="product-order">
              <div>
                <img
                  src="./assets/images/image-macaron-thumbnail.jpg"
                  alt="macaron thumbnail"
                />
                <div>
                  <p className="product-name">Macaron</p>
                  <p className="product-pricing-info">
                    <span className="quantity">1x</span>
                    <span className="text-light">$7.00</span>
                  </p>
                </div>
              </div>
              <span className="overall-price">$ 7.00</span>
            </li>
            <li className="product-order">
              <div>
                <img
                  src="./assets/images/image-macaron-thumbnail.jpg"
                  alt="macaron thumbnail"
                />
                <div>
                  <p className="product-name">Macaron</p>
                  <p className="product-pricing-info">
                    <span className="quantity">1x</span>
                    <span className="text-light">$7.00</span>
                  </p>
                </div>
              </div>
              <span className="overall-price">$ 7.00</span>
            </li>
          </ul>
          <p className="cost">
            <span>Order Total</span>
            <span className="total">$(X)</span>
          </p>
        </div>

        <div className="order-btn">
          <button>Start New Order</button>
        </div>
      </div>
    </div>
  );
}

export default App;
