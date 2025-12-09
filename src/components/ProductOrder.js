export default function ProductOrder({
  productName,
  productPrice,
  productQuantity,
  productTotalPrice,
  numToString,
  setOrder,
}) {
  function onResetProduct(product) {
    setOrder((item) =>
      item.map((data) =>
        data.name === product ? { ...data, quantity: 0, totalPrice: 0 } : data
      )
    );
  }

  return (
    <li className="product-order">
      <div>
        <p className="product-name">{productName}</p>
        <p className="product-pricing-info">
          <span className="quantity">{productQuantity}x</span>
          <span className="text-light">@ ${numToString(productPrice)}</span>
          <span className="overall-price text-accent">
            ${numToString(productTotalPrice)}
          </span>
        </p>
      </div>
      <button className="icon-btn" onClick={() => onResetProduct(productName)}>
        <ion-icon className="close-icon" name="close-circle-outline"></ion-icon>
      </button>
    </li>
  );
}
