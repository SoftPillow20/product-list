export default function ProductOrder({
  order,
  quantityWaffle,
  waffleTotalPrice,
  NumberToString,
}) {
  return (
    <li className="product-order">
      <div>
        <p className="product-name">{order[0]?.name}</p>
        <p className="product-pricing-info">
          <span className="quantity">{quantityWaffle}x</span>
          <span className="text-light">
            @ ${NumberToString(order[0]?.price)}
          </span>
          <span className="overall-price text-accent">
            ${NumberToString(waffleTotalPrice)}
          </span>
        </p>
      </div>
      <button className="icon-btn">
        <ion-icon className="close-icon" name="close-circle-outline"></ion-icon>
      </button>
    </li>
  );
}
