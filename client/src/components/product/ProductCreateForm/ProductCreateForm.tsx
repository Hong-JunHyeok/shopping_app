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

  const handleCreate = (newProduct: Omit<ProductType, "id">) => {
    fetch("/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts((prev) => [...prev, data.product]);
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
      onSubmit={(event) => {
        event.preventDefault();
        handleCreate({
          name,
          explanation,
          price,
        });
      }}
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
