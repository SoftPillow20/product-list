import Products from "./Products";
import Product from "./Product";

export default function ShoppingList({
  children,
  order,
  setQuantityWaffle,
  quantityWaffle,
  onAddProductOrder,
  onRemoveProductOrder,
}) {
  const waffle = order[0];

  return (
    <div className="shopping-list">
      {children}
      <Products>
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
        ></Product>
      </Products>
    </div>
  );
}
