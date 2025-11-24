export default function ButtonCart({ setQuantityWaffle, quantityWaffle }) {
  function addQuantityWaffle() {
    setQuantityWaffle((q) => q + 1);
  }
  return (
    <>
      {quantityWaffle ? (
        <ButtonControl productQuantity={quantityWaffle} />
      ) : (
        <Button setQuantityWaffle={addQuantityWaffle} />
      )}
    </>
  );
}

function Button({ setQuantityWaffle }) {
  return (
    <button
      className="add-product-btn text-dark bg-light"
      onClick={setQuantityWaffle}
    >
      <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart icon" />
      Add to Cart
    </button>
  );
}

function ButtonControl({ productQuantity }) {
  return (
    <div className="control-order text-light--1 bg-red">
      <button className="btn-control">
        <ion-icon
          className="minus-icon"
          name="remove-circle-outline"
        ></ion-icon>
      </button>
      <span>{productQuantity}</span>
      <button className="btn-control">
        <ion-icon className="plus-icon" name="add-circle-outline"></ion-icon>
      </button>
    </div>
  );
}
