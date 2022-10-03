import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductItemProps } from "./ProductItem.types";

const ProductItem = ({ product, onDelete, onUpdate }: ProductItemProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editName, setEditName] = useState(product.name);
  const [editExplanation, setEditExplanation] = useState(product.explanation);
  const [editPrice, setEditPrice] = useState(product.price);

  return (
    <div>
      <div>{product.id}</div>
      <div>
        <Link to={`/${product.id}`}>{product.name}</Link>
      </div>
      <div>{product.price}</div>
      <div>{product.explanation}</div>

      <button type="button" onClick={() => onDelete(product.id)}>
        삭제하기
      </button>

      <button type="button" onClick={() => setIsEditMode((prev) => !prev)}>
        수정하기
      </button>

      {isEditMode && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onUpdate({
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
    </div>
  );
};

export default ProductItem;
