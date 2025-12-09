export default function ProductOrder({
  productName,
  productPrice,
  productQuantity,
  productTotalPrice,
}) {
  function numToString(num) {
    return !String(num).includes(".") ? num + ".00" : num + "0";
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
      <button className="icon-btn">
        <ion-icon className="close-icon" name="close-circle-outline"></ion-icon>
      </button>
    </li>
  );
}
