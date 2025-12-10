export default function NewOrderBtn({ onResetOrder }) {
  return (
    <div className="order-btn">
      <button onClick={() => onResetOrder()}>Start New Order</button>
    </div>
  );
}
