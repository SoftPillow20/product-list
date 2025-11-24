export default function Product({ image, name, category, price }) {
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
