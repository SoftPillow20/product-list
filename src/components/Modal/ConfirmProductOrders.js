export default function ConfirmProductOrders({
  productName,
  productQuantity,
  productPrice,
  productTotalPrice,
  numToString,
  productThumbnail,
}) {
  console.log(productThumbnail);
  return (
    <>
      <div>
        <img src={productThumbnail} alt={productName} />
        <div>
          <p className="product-name">{productName}</p>
          <p className="product-pricing-info">
            <span className="quantity">{productQuantity}x</span>
            <span className="text-light">@${numToString(productPrice)}</span>
          </p>
        </div>
      </div>
      <span className="overall-price">${numToString(productTotalPrice)}</span>
    </>
  );
}
