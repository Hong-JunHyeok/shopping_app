import { useEffect } from "react";
import { ProductType } from "../Product.types";
import { useProductContext } from "../ProductContext";
import ProductItem from "../ProductItem";

const ProductList = () => {
  const [products, setProducts] = useProductContext();

  const handleDelete = (id: number) => {
    fetch(`/product/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setProducts(products.filter((product) => product.id !== id));
      }
    });
  };

  const handleUpdate = (updateProduct: ProductType) => {
    fetch(`/product/${updateProduct.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    }).then((response) => {
      if (response.ok) {
        setProducts(
          products.map((product) =>
            product.id === updateProduct.id ? updateProduct : product
          )
        );
      }
    });
  };

  useEffect(() => {
    fetch("/product")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <ProductItem
          product={product}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </ul>
  );
};

export default ProductList;
