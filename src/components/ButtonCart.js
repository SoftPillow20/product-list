export default function ButtonCart({
  setQuantity,
  quantityProduct,
  onAddProductOrder,
  onRemoveProductOrder,
  product,
}) {
  function addQuantityWaffle() {
    setQuantity((q) => q + 1);
    onAddProductOrder(product, quantityProduct);
  }

  function removeQuantityWaffle() {
    setQuantity((q) => q - 1);
  }

  return (
    <>
      {quantityProduct ? (
        <ButtonControl
          product={product}
          addQuantityWaffle={addQuantityWaffle}
          removeQuantityWaffle={removeQuantityWaffle}
          onRemoveProductOrder={onRemoveProductOrder}
          quantityProduct={quantityProduct}
        />
      ) : (
        <Button
          addQuantity={addQuantityWaffle}
          onAddProductOrder={onAddProductOrder}
          product={product}
          quantityProduct={quantityProduct}
        />
      )}
    </>
  );
}

function Button({ addQuantity }) {
  return (
    <button
      className="add-product-btn text-dark bg-light"
      onClick={() => {
        addQuantity();
      }}
    >
      <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart icon" />
      Add to Cart
    </button>
  );
}

function ButtonControl({
  product,
  quantityProduct,
  removeQuantityWaffle,
  addQuantityWaffle,
  onRemoveProductOrder,
}) {
  return (
    <div className="control-order text-light--1 bg-red">
      <button
        className="btn-control"
        onClick={() => {
          if (quantityProduct >= 1) removeQuantityWaffle();
          onRemoveProductOrder(product);
        }}
      >
        <ion-icon
          className="minus-icon"
          name="remove-circle-outline"
        ></ion-icon>
      </button>
      <span>{quantityProduct}</span>
      <button className="btn-control" onClick={addQuantityWaffle}>
        <ion-icon className="plus-icon" name="add-circle-outline"></ion-icon>
      </button>
    </div>
  );
}
