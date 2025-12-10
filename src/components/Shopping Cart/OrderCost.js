export default function OrderCost({ order, numToString }) {
  return (
    <div className="cost">
      <p>Order Total</p>
      <p className="total">
        $
        {numToString(
          order.reduce(
            (acc, item) => (item.totalPrice ? item.totalPrice + acc : acc + 0),
            0
          )
        )}
      </p>
    </div>
  );
}
