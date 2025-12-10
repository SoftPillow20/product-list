export default function ProductOrderDetails({
  productName,
  productPrice,
  productQuantity,
  productTotalPrice,
  numToString,
  onResetProduct,
}) {
  return (
    <>
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
    </>
  );
}
