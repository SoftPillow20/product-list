export default function ProductBtn({ onSelectedItem, name }) {
  return (
    <button
      className="add-product-btn text-dark bg-light"
      onClick={() => onSelectedItem(name)}
    >
      <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart icon" />
      Add to Cart
    </button>
  );
}
