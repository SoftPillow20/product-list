import ProductImg from "./ProductImg";
import ProductBtn from "./ProductBtn";
import ProductInfo from "./ProductInfo";

export default function Product({ image, name, category, price }) {
  return (
    <div className="product">
      <ProductImg>
        <img src={image} alt={name} />
        <ProductBtn />
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
