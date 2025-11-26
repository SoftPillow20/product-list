import data from "./data.json";
import ShoppingList from "./components/ShoppingList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState([]);
  const [quantityWaffle, setQuantityWaffle] = useState(0);
  const waffle = data[0];
  let waffleTotalPrice = quantityWaffle * waffle.price;
  let productTotalPrice = waffleTotalPrice;
  let totalQuantity = quantityWaffle;

  console.log(totalQuantity);

  function addProductOrder(newOrder) {
    // Add product to order array
    setOrder((order) => [...order, newOrder]);
  }

  function removeProductOrder(product) {
    // Remove product by quantity
    setOrder((order) => order.filter((o) => o.name !== product.name));
  }

  return (
    <main className="grid shopping-component">
      <ShoppingList
        waffle={waffle}
        setQuantityWaffle={setQuantityWaffle}
        quantityWaffle={quantityWaffle}
        onAddProductOrder={addProductOrder}
        onRemoveProductOrder={removeProductOrder}
      >
        <h2 className="product-title">Desserts</h2>
      </ShoppingList>
      <ShoppingCart
        waffle={waffle}
        setQuantityWaffle={setQuantityWaffle}
        totalQuantity={totalQuantity}
        quantityWaffle={quantityWaffle}
        waffleTotalPrice={waffleTotalPrice}
        productTotalPrice={productTotalPrice}
        removeProductOrder={removeProductOrder}
      />
    </main>
  );
}

export default App;
