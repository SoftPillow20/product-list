export default function ShoppingCart({ getOrderQuantity, children }) {
  return (
    <div className="shopping-cart bg-light">
      <h2 className="text-red">
        Your Cart ({!getOrderQuantity() ? 0 : getOrderQuantity()})
      </h2>
      {children}
    </div>
  );
}
