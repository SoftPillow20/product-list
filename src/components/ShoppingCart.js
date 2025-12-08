export default function ShoppingCart({ children }) {
  return (
    <div className="shopping-cart bg-light">
      <h2 className="text-red">Your Cart (0)</h2>
      {children}
    </div>
  );
}
