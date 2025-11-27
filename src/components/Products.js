import Product from "./Product";

export default function Products({
  order,
  setQuantityWaffle,
  quantityWaffle,
  onAddProductOrder,
  onRemoveProductOrder,
}) {
  const waffle = order[0];

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
        quantityProduct={quantityWaffle}
        onAddProductOrder={onAddProductOrder}
        onRemoveProductOrder={onRemoveProductOrder}
      />
    </div>
  );
}
