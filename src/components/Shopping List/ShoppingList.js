export default function ShoppingList({ children }) {
  return (
    <div className="shopping-list">
      <h2 className="product-title">Desserts</h2>
      {children}
    </div>
  );
}
