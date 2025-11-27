import ButtonCart from "./ButtonCart";

export default function Product({
  product,
  image,
  name,
  category,
  price,
  setQuantity,
  quantityProduct,
  onAddProductOrder,
  onRemoveProductOrder,
}) {
  return (
    <div className="product">
      <div className="product-img">
        <img
          className={quantityProduct >= 1 ? "selected" : ""}
          src={image}
          alt={name}
        />

        <ButtonCart
          product={product}
          setQuantity={setQuantity}
          quantityProduct={quantityProduct}
          onAddProductOrder={onAddProductOrder}
          onRemoveProductOrder={onRemoveProductOrder}
        />
      </div>
      <p className="product-category text-light">{category}</p>
      <p className="product-name text-dark">{name}</p>
      <p className="product-price text-red">
        ${String(price).length >= 3 ? price + "0" : price + ".00"}
      </p>
    </div>
  );
}
