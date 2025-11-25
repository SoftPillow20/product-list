export default function ButtonCart({
  setQuantity,
  quantity,
  onAddProductOrder,
  onRemoveProductOrder,
  product,
}) {
  function addQuantityWaffle() {
    setQuantity((q) => q + 1);
    onAddProductOrder(product);
  }

  function removeQuantityWaffle() {
    if (quantity >= 0) setQuantity((q) => q - 1);
    onRemoveProductOrder(product);
  }
  return (
    <>
      {quantity ? (
        <ButtonControl
          addQuantityWaffle={addQuantityWaffle}
          removeQuantityWaffle={removeQuantityWaffle}
          productQuantity={quantity}
        />
      ) : (
        <Button setQuantity={addQuantityWaffle} />
      )}
    </>
  );
}

function Button({ setQuantity }) {
  return (
    <button
      className="add-product-btn text-dark bg-light"
      onClick={setQuantity}
    >
      <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart icon" />
      Add to Cart
    </button>
  );
}

function ButtonControl({
  productQuantity,
  removeQuantityWaffle,
  addQuantityWaffle,
}) {
  return (
    <div className="control-order text-light--1 bg-red">
      <button className="btn-control" onClick={removeQuantityWaffle}>
        <ion-icon
          className="minus-icon"
          name="remove-circle-outline"
        ></ion-icon>
      </button>
      <span>{productQuantity}</span>
      <button className="btn-control" onClick={addQuantityWaffle}>
        <ion-icon className="plus-icon" name="add-circle-outline"></ion-icon>
      </button>
    </div>
  );
}
