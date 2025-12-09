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
              totalPrice: order.totalPrice * (order.quantity + 1),
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
              totalPrice: order.totalPrice / order.quantity,
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
      <ShoppingCart order={order} getOrderQuantity={getOrderQuantity}>
        {getOrderQuantity() ? <Order order={order} /> : <IsEmptyCart />}
      </ShoppingCart>
    </main>
  );
}

export default App;
