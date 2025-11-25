import Products from "./Products";

export default function ShoppingList({
  children,
  waffle,
  setQuantityWaffle,
  quantityWaffle,
  onAddProductOrder,
  onRemoveProductOrder,
}) {
  return (
    <div className="shopping-list">
      {children}
      <Products
        waffle={waffle}
        setQuantityWaffle={setQuantityWaffle}
        quantityWaffle={quantityWaffle}
        onAddProductOrder={onAddProductOrder}
        onRemoveProductOrder={onRemoveProductOrder}
      />
    </div>
  );
}
