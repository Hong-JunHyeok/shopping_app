import { useEffect, useState } from "react";
import Loading from "../../shared/Loading";
import { useProductContext } from "../ProductContext";
import ProductItem from "../ProductItem";

const ProductList = () => {
  const [products, setProducts] = useProductContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("/product")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProducts(data.products);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
