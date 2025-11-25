export default function IsEmptyCart({ order }) {
  return (
    <div className={`empty-cart ${!order.length ? "" : "hidden"}`}>
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
