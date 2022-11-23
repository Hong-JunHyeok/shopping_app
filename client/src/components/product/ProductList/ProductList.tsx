import { useEffect, useState } from "react";

import { useProductContext } from "../ProductContext";

import Loading from "../../shared/Loading";
import ProductItem from "../ProductItem";

import * as styles from './ProductList.styles';

const ProductList = () => {
  const [products, setProducts] = useProductContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("/product")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      }).finally(() => {
        // TODO: 책에 이 부분 반영하기
        setLoading(false);
      })
  }, []);

  if (loading) return <Loading />;

  return (
    <styles.ListContainer>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </styles.ListContainer>
  );
};

export default ProductList;
