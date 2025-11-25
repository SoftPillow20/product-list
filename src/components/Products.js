import Product from "./Product";

export default function Products({
  waffle,
  setQuantityWaffle,
  quantityWaffle,
  onAddProductOrder,
  onRemoveProductOrder,
}) {
  // const CremeBrulee = data[1];

  return (
    <div className="grid grid-cols-3 products">
      <Product
        product={waffle}
        image={waffle.image.desktop}
        name={waffle.name}
        category={waffle.category}
        price={waffle.price}
        key={waffle.name}
        setQuantity={setQuantityWaffle}
        quantity={quantityWaffle}
        onAddProductOrder={onAddProductOrder}
        onRemoveProductOrder={onRemoveProductOrder}
      />
    </div>
  );
}
