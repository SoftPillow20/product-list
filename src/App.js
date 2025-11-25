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

  function addProductOrder(newOrder) {
    // Add product to order array
    setOrder((order) => [...order, newOrder]);
  }

  function removeProductOrder() {
    setOrder((order) => order.filter((_, i) => i !== quantityWaffle - 1));
  }

  // function addProductOrderToCart() {
  // setOrder(() =>
  //   data.map((d) =>
  //     dessert.name === d.name
  //       ? {
  //           name: dessert.name,
  //           price: dessert.price,
  //           quantity,
  //           totalPrice: dessert.price * quantity,
  //         }
  //       : d
  //   )
  // );
  // }

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
        order={order}
        quantityWaffle={quantityWaffle}
        waffleTotalPrice={waffleTotalPrice}
        productTotalPrice={productTotalPrice}
      />
    </main>
  );
}

export default App;
