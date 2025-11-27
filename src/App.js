import data from "./data.json";
import ShoppingList from "./components/ShoppingList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState(data);
  const [quantityWaffle, setQuantityWaffle] = useState(0);
  let totalQuantity = quantityWaffle;

  function addProductOrder(newOrder, quantity) {
    // Add product to order array
    setOrder((order) =>
      order.map((o) =>
        o.name === newOrder.name
          ? { ...newOrder, totalPrice: newOrder.price * (quantity + 1) }
          : o
      )
    );
  }

  function removeProductOrder(newOrder) {
    // Remove product by quantity
    setOrder((order) =>
      order.map((o) =>
        o.name === newOrder.name
          ? { ...newOrder, totalPrice: newOrder.totalPrice - newOrder.price }
          : o
      )
    );
  }

  return (
    <main className="grid shopping-component">
      <ShoppingList
        order={order}
        setQuantityWaffle={setQuantityWaffle}
        quantityWaffle={quantityWaffle}
        onAddProductOrder={addProductOrder}
        onRemoveProductOrder={removeProductOrder}
      >
        <h2 className="product-title">Desserts</h2>
      </ShoppingList>
      <ShoppingCart
        order={order}
        setQuantityWaffle={setQuantityWaffle}
        totalQuantity={totalQuantity}
        quantityWaffle={quantityWaffle}
        removeProductOrder={removeProductOrder}
      />
    </main>
  );
}

export default App;
