import data from "./data.json";
import ShoppingList from "./components/ShoppingList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

// const order = [
//   {
//     productName: data[0].name,
//     quantity: 1, //state
//     price: data[0].price,
//     totalPrice: data[0].price * 2,
//   },
// ];

function App() {
  // const [order, setOrder] = useState([]);
  const [quantityWaffle, setQuantityWaffle] = useState(0);

  return (
    <main className="grid shopping-component">
      <ShoppingList
        data={data}
        setQuantityWaffle={setQuantityWaffle}
        quantityWaffle={quantityWaffle}
      >
        <h2 className="product-title">Desserts</h2>
      </ShoppingList>
      <ShoppingCart />
    </main>
  );
}

export default App;
