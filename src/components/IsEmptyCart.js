export default function IsEmptyCart() {
  return (
    <div className="empty-cart hidden">
      <div>
        <img
          src="./assets/images/illustration-empty-cart.svg"
          alt="illustration empty cart"
        />
      </div>
      <p>Your added items will appear here</p>
    </div>
  );
}
