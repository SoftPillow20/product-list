import Product from "./Product";

export default function Products({ data }) {
  return (
    <div className="grid grid-cols-3 products">
      {data.map((product) => (
        <Product
          image={product.image.desktop}
          name={product.name}
          category={product.category}
          price={product.price}
          key={product.name}
        />
      ))}
    </div>
  );
}
