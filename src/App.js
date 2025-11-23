import data from "./data.json";
// import addCartIcon from "./icon-add-to-cart.svg";

function App() {
  console.log(data);

  return (
    <main className="grid shopping-component">
      <ShoppingList>
        <h2 className="product-title">Desserts</h2>
      </ShoppingList>
      <ShoppingCart />
    </main>
  );
}

function ShoppingList({ children }) {
  return (
    <div className="shopping-list">
      {children}
      <Products />
    </div>
  );
}

function Products() {
  return (
    <div className="grid grid-cols-3 products">
      {data.map((product) => (
        <Product
          image={product.image.desktop}
          name={product.name}
          category={product.category}
          price={product.price}
          key={product.name}
        />
      ))}
    </div>
  );
}

function Product({ image, name, category, price }) {
  return (
    <div className="product">
      <div className="product-img">
        <img src={image} alt={name} />

        <button className="add-product-btn text-dark bg-light">
          <img
            src="./assets/images/icon-add-to-cart.svg"
            alt="add to cart icon"
          />
          Add to Cart
        </button>
      </div>
      <p className="product-category text-light">{category}</p>
      <p className="product-name text-dark">{name}</p>
      <p className="product-price text-red">
        ${String(price).length >= 3 ? price + "0" : price + ".00"}
      </p>
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="shopping-cart bg-light">
      <h2 className="text-red">Your Cart (0)</h2>
      <OrderList />
      <IsEmptyCart />
    </div>
  );
}

function OrderList() {
  return (
    <div className="order hidden">
      <ul className="order-lists">
        <ProductOrder />
      </ul>
      <div className="cost">
        <p>Order Total</p>
        <p className="total">$(X)</p>
      </div>
      <div className="order-info">
        <p>
          <img src="./assets/images/icon-carbon-neutral.svg" alt="tree icon" />
          <span>
            This is a <strong>carbon-neutral</strong> delivery
          </span>
        </p>
      </div>
      <div className="order-btn">
        <Button>Confirm Order</Button>
      </div>
    </div>
  );
}

function IsEmptyCart() {
  return (
    <div className="empty-cart">
      <div>
        <img
          src="./assets/images/illustration-empty-cart.svg"
          alt="illustration empty cart"
        />
      </div>
      <p>Your added items will appear here</p>
    </div>
  );
}

function ProductOrder() {
  return (
    <li className="product-order">
      <div>
        <p className="product-name">Classic Tiramisu</p>
        <p className="product-pricing-info">
          <span className="quantity">1x</span>
          <span className="text-light">@ $7.00</span>
          <span className="overall-price text-accent">$5.50</span>
        </p>
      </div>
      <button className="icon-btn">
        <ion-icon className="close-icon" name="close-circle-outline"></ion-icon>
      </button>
    </li>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

export default App;
