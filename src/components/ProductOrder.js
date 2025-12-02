export default function ProductOrder({
  product,
  setQuantity,
  quantity,
  totalPrice,
  numberToString,
  removeProductOrder,
}) {
  return (
    <li className="product-order">
      <div>
        <p className="product-name">{product.name}</p>
        <p className="product-pricing-info">
          <span className="quantity">{quantity}x</span>
          <span className="text-light">@ ${numberToString(product.price)}</span>
          <span className="overall-price text-accent">
            ${numberToString(totalPrice)}
          </span>
        </p>
      </div>
      <button
        className="icon-btn"
        onClick={() => {
          removeProductOrder(product);
          setQuantity(0);
        }}
      >
        <ion-icon className="close-icon" name="close-circle-outline"></ion-icon>
      </button>
    </li>
  );
}
