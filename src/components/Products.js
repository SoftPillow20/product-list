import Product from "./Product";

export default function Products({ data, setQuantityWaffle, quantityWaffle }) {
  const waffle = data[0];
  // const CremeBrulee = data[1];

  return (
    <div className="grid grid-cols-3 products">
      {/* {data.map((product) => (
        <Product
          image={product.image.desktop}
          name={product.name}
          category={product.category}
          price={product.price}
          key={product.name}
          setQuantityWaffle={setQuantityWaffle}
          isAddToCart={isAddToCart}
        />
      ))} */}

      <Product
        image={waffle.image.desktop}
        name={waffle.name}
        category={waffle.category}
        price={waffle.price}
        key={waffle.name}
        setQuantityWaffle={setQuantityWaffle}
        quantityWaffle={quantityWaffle}
      />
    </div>
  );
}
