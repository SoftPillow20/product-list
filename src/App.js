import data from "./data.json";
import ShoppingList from "./components/ShoppingList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <main className="grid shopping-component">
      <ShoppingList data={data}>
        <h2 className="product-title">Desserts</h2>
      </ShoppingList>
      <ShoppingCart />
    </main>
  );
}

export default App;
