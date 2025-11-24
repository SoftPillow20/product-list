import Products from "./Products";

export default function ShoppingList({ children, data }) {
  return (
    <div className="shopping-list">
      {children}
      <Products data={data} />
    </div>
  );
}
