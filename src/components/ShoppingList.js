import Products from "./Products";

export default function ShoppingList({
  children,
  order,
  setQuantityWaffle,
  quantityWaffle,
  onAddProductOrder,
  onRemoveProductOrder,
}) {
  return (
    <div className="shopping-list">
      {children}
      <Products
        order={order}
        setQuantityWaffle={setQuantityWaffle}
        quantityWaffle={quantityWaffle}
        onAddProductOrder={onAddProductOrder}
        onRemoveProductOrder={onRemoveProductOrder}
      />
    </div>
  );
}
