import ProductImg from "./ProductImg";
import ProductBtn from "./ProductBtn";
import ProductInfo from "./ProductInfo";
import ProductBtnController from "./ProductBtnController";
import { useState } from "react";

export default function Product({ image, name, category, price }) {
  const [selectItem, setSelectItem] = useState(null);

  function onSelectedItem(currItem) {
    setSelectItem((prevItem) => (prevItem !== currItem ? currItem : null));
    console.log(selectItem);
  }

  return (
    <div className="product">
      <ProductImg>
        <img src={image} alt={name} />
        {selectItem ? (
          <ProductBtnController />
        ) : (
          <ProductBtn onSelectedItem={onSelectedItem} name={name} />
        )}
      </ProductImg>
      <ProductInfo>
        <p className="product-category text-light">{category}</p>
        <p className="product-name text-dark">{name}</p>
        <p className="product-price text-red">
          ${String(price).length >= 3 ? price + "0" : price + ".00"}
        </p>
      </ProductInfo>
    </div>
  );
}
