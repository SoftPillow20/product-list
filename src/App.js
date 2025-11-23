import data from "./data.json";
// import addCartIcon from "./icon-add-to-cart.svg";

function App() {
  console.log(data);

  return (
    <main className="grid shopping-component bg-accent">
      <ShoppingList>
        <h2 className="product-title">Desserts</h2>
      </ShoppingList>
      <div></div>
    </main>
  );
}

function ShoppingList({ children }) {
  return (
    <div className="product-list">
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

export default App;
