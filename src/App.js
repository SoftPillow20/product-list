import data from "./data.json";
import ShoppingList from "./components/ShoppingList";
import Products from "./components/Products";
import Product from "./components/Product";
import IsEmptyCart from "./components/IsEmptyCart";
import ShoppingCart from "./components/ShoppingCart";
import OrderList from "./components/OrderList";
import OrderCost from "./components/OrderCost";
import OrderInfo from "./components/OrderInfo";
import ProductOrder from "./components/ProductOrder";
import OrderBtn from "./components/OrderBtn";

function App() {
  console.log(data);

  return (
    <main className="grid shopping-component">
      <ShoppingList>
        <Products>
          {data.map((product) => (
            <Product
              image={product.image.desktop}
              name={product.name}
              category={product.category}
              price={product.price}
              key={product.name}
            />
          ))}
        </Products>
      </ShoppingList>
      <ShoppingCart>
        <Order />
        <IsEmptyCart />
      </ShoppingCart>
    </main>
  );
}

function Order() {
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

export default App;
