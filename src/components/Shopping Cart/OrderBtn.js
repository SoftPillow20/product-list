export default function OrderBtn({ setConfirmOrder }) {
  return (
    <div className="order-btn">
      <button onClick={() => setConfirmOrder(true)}>Confirm Order</button>
    </div>
  );
}
