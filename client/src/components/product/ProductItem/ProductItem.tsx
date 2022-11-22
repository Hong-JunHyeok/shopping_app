import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../Product.types";
import { useProductContext } from "../ProductContext";

import * as styles from './ProductItem.styles';

interface Props {
  product: ProductType;
}

const ProductItem = ({ product }: Props) => {
  const [products, setProducts] = useProductContext();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editName, setEditName] = useState(product.name);
  const [editExplanation, setEditExplanation] = useState(product.explanation);
  const [editPrice, setEditPrice] = useState(product.price);

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

  return (
    <styles.ProductItemContainer
      isEdit={isEditMode}
    >
      <Link 
        className="name"
        to={`/${product.id}`}
      >
        {product.name}
      </Link>
      
      <span className="price">{product.price}</span>
      {product?.thumbnail && 
        <img 
          className="thumbnail"
          src={product.thumbnail} 
          alt={product.explanation} 
        />
      }
      <p className="explanation">
        {product.explanation}
      </p>


      <div className="button-group">
        <button 
          type="button" 
          onClick={() => handleDelete(product.id)}
        >
          삭제하기
        </button>

        <button 
          type="button" 
          onClick={() => setIsEditMode((prev) => !prev)}
        >
          수정하기
        </button>
      </div>

      {isEditMode && (
        <styles.ProductEditContainer
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
        </styles.ProductEditContainer>
      )}
    </styles.ProductItemContainer>
  );
};

export default ProductItem;
