import Products from "./Products";

export default function ShoppingList({
  children,
  data,
  setQuantityWaffle,
  quantityWaffle,
}) {
  return (
    <div className="shopping-list">
      {children}
      <Products
        data={data}
        setQuantityWaffle={setQuantityWaffle}
        quantityWaffle={quantityWaffle}
      />
    </div>
  );
}
