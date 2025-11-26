export default function ProductOrder({
  waffle,
  setQuantityWaffle,
  quantityWaffle,
  waffleTotalPrice,
  NumberToString,
  removeProductOrder,
}) {
  return (
    <li className="product-order">
      <div>
        <p className="product-name">{waffle.name}</p>
        <p className="product-pricing-info">
          <span className="quantity">{quantityWaffle}x</span>
          <span className="text-light">@ ${NumberToString(waffle.price)}</span>
          <span className="overall-price text-accent">
            ${NumberToString(waffleTotalPrice)}
          </span>
        </p>
      </div>
      <button
        className="icon-btn"
        onClick={() => {
          removeProductOrder(waffle);
          setQuantityWaffle(0);
        }}
      >
        <ion-icon className="close-icon" name="close-circle-outline"></ion-icon>
      </button>
    </li>
  );
}
