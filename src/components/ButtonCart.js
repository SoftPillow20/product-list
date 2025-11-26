export default function ButtonCart({
  setQuantity,
  quantity,
  onAddProductOrder,
  onRemoveProductOrder,
  product,
}) {
  function addQuantityWaffle() {
    setQuantity((q) => q + 1);
  }

  function removeQuantityWaffle() {
    if (quantity >= 0) setQuantity((q) => q - 1);
  }

  return (
    <>
      {quantity ? (
        <ButtonControl
          product={product}
          addQuantityWaffle={addQuantityWaffle}
          removeQuantityWaffle={removeQuantityWaffle}
          onRemoveProductOrder={onRemoveProductOrder}
          productQuantity={quantity}
        />
      ) : (
        <Button
          addQuantity={addQuantityWaffle}
          onAddProductOrder={onAddProductOrder}
          product={product}
        />
      )}
    </>
  );
}

function Button({ addQuantity, onAddProductOrder, product }) {
  return (
    <button
      className="add-product-btn text-dark bg-light"
      onClick={() => {
        addQuantity();
        onAddProductOrder(product);
      }}
    >
      <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart icon" />
      Add to Cart
    </button>
  );
}

function ButtonControl({
  product,
  productQuantity,
  removeQuantityWaffle,
  addQuantityWaffle,
  onRemoveProductOrder,
}) {
  return (
    <div className="control-order text-light--1 bg-red">
      <button
        className="btn-control"
        onClick={() => {
          removeQuantityWaffle();
          onRemoveProductOrder(product);
        }}
      >
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
