import { useEffect, useState } from "react";
import { useProductContext } from "../ProductContext";
import ProductThumbnailUploader from "../ProductThumbnailUploader";

import * as styles from './ProductCreateForm.styles';
import { ProductType } from "../Product.types";

const ProductCreateForm = () => {
  const [, setProducts] = useProductContext();
  const [name, setName] = useState("");
  const [explanation, setExplanation] = useState("");
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const uploadThumbnailRequest = (productId: number, thumbnail: File) => {
    const formData = new FormData();
    formData.append("thumbnail", thumbnail);
    return fetch(`/product/thumbnail/${productId}`, {
      method: "PATCH",
      body: formData,
    });
  };
  
  const createProductRequest = (newProduct: Omit<ProductType, "id">) => {
    return fetch("/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
  };
 

  const handleCreateProduct = (event: React.FormEvent) => {
    event.preventDefault();
    createProductRequest({
      name,
      explanation,
      price,
    })
      .then((response) => response.json())
      .then((data) => {
        const product = data.product as ProductType;
        if (thumbnail) {
          return uploadThumbnailRequest(product.id, thumbnail).then(
            (response) => response.json()
          );
        } else {
          return Promise.resolve(data);
        }
      })
      .then((data) => {
        console.log(data);
        const newProduct = data.product as ProductType;
        setProducts((prev) => [newProduct, ...prev]);
      });
  };
 

  const handleClearThumbnail = () => {
    setThumbnail(null);
  };

  useEffect(() => {
    console.log(thumbnail);
  }, [thumbnail]);

  return (
    <styles.FormContainer
      onSubmit={handleCreateProduct}
    >
      <input
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="상품의 이름"
      />
      <input
        onChange={(event) => setExplanation(event.target.value)}
        type="text"
        placeholder="상품 설명"
      />
      <input
        onChange={(event) => setPrice(parseInt(event.target.value, 10))}
        type="number"
        placeholder="상품 가격"
      />
      <ProductThumbnailUploader
        value={thumbnail}
        onChange={(file) => setThumbnail(file)}
        onClickThumbnail={handleClearThumbnail}
        onUpload={() => console.log("성공")}
        onError={() => console.error("에러")}
      />
      <input type="submit" value="상품 만들기" />
    </styles.FormContainer>
  );
};

export default ProductCreateForm;
