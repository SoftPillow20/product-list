export default function IsEmptyCart({ totalQuantity }) {
  return (
    <div className={`empty-cart ${!totalQuantity ? "" : "hidden"}`}>
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
