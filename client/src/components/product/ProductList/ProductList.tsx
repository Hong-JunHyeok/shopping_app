import { useEffect } from "react";
import { useProductContext } from "../../../contexts/ProductContext";
import ProductItem from "../ProductItem";

const ProductList = () => {
  const [products, setProducts] = useProductContext();

  useEffect(() => {
    fetch("/product")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, [setProducts]);

  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
