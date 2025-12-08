export default function ProductOrder() {
  return (
    <li className="product-order">
      <div>
        <p className="product-name">Classic Tiramisu</p>
        <p className="product-pricing-info">
          <span className="quantity">1x</span>
          <span className="text-light">@ $7.00</span>
          <span className="overall-price text-accent">$5.50</span>
        </p>
      </div>
      <button className="icon-btn">
        <ion-icon className="close-icon" name="close-circle-outline"></ion-icon>
      </button>
    </li>
  );
}
