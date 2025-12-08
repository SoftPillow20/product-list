export default function ProductBtnController({
  IncreaseQuantityProduct,
  DecreaseQuantityProduct,
  productName,
  setSelectItem,
  order,
}) {
  return (
    <div className="product-controller bg-dark text-white">
      <button
        onClick={() => {
          const currOrder = order.filter((item) =>
            item.name === productName ? item : null
          );
          console.log(currOrder[0].quantity);
          console.log(currOrder[0].quantity > 1);
          if (currOrder[0].quantity > 1) DecreaseQuantityProduct(productName);
          else setSelectItem(null);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      1
      <button onClick={() => IncreaseQuantityProduct(productName)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
