import { useState } from "react";
import { useProductContext } from "../../../../contexts/ProductContext";
import { ProductType } from "../../Product.types";

interface Props {
  product: ProductType;
}

const UpdateForm = ({ product }: Props) => {
  const [, setProducts] = useProductContext();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editName, setEditName] = useState(product.name);
  const [editExplanation, setEditExplanation] = useState(product.explanation);
  const [editPrice, setEditPrice] = useState(product.price);

  const handleUpdate = (updateProduct: ProductType) => {
    fetch(`/product/${updateProduct.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    }).then((response) => {
      if (response.ok) {
        setProducts((prev) =>
          prev.map((product) =>
            product.id === updateProduct.id ? updateProduct : product
          )
        );
      }
    });
  };

  return (
    <>
      <button type="button" onClick={() => setIsEditMode((prev) => !prev)}>
        수정하기
      </button>

      {isEditMode && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleUpdate({
              id: product.id,
              name: editName,
              price: editPrice,
              explanation: editExplanation,
            });
          }}
        >
          <input
            type="text"
            placeholder="상품의 이름"
            value={editName}
            onChange={(event) => setEditName(event.target.value)}
          />
          <input
            type="text"
            placeholder="상품 설명"
            value={editExplanation}
            onChange={(event) => setEditExplanation(event.target.value)}
          />
          <input
            type="number"
            placeholder="상품 가격"
            value={editPrice}
            onChange={(event) => setEditPrice(parseInt(event.target.value, 10))}
          />
          <input type="submit" value="상품 수정하기" />
        </form>
      )}
    </>
  );
};

export default UpdateForm;
