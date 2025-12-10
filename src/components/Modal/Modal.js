export default function Modal({ children }) {
  return (
    <dialog className="modal">
      <div>
        <img
          src="./assets/images/icon-order-confirmed.svg"
          alt="order confirmed icon"
        />
      </div>
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      {children}
    </dialog>
  );
}
