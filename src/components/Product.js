import ButtonCart from "./ButtonCart";

export default function Product({
  image,
  name,
  category,
  price,
  setQuantityWaffle,
  quantityWaffle,
}) {
  return (
    <div className="product">
      <div className="product-img">
        <img src={image} alt={name} />

        <ButtonCart
          setQuantityWaffle={setQuantityWaffle}
          quantityWaffle={quantityWaffle}
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
