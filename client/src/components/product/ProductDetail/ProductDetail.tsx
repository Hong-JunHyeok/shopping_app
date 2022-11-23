import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../../shared/Loading";
import * as styles from './ProductDetail.styles';
import { ProductType } from "../Product.types";

interface Props {
  productId: string;
}

const ProductDetail = ({ productId }: Props) => {
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchaseButtonClick = () => {
    navigate(`/purchase/${product?.id}`);
  }

  useEffect(() => {
    setIsLoading(true);

    fetch(`/product/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.product))
      .finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading) return <Loading />

  return (
    <styles.ProductDetailContainer>
      {product?.thumbnail && 
        <img 
          className="thumbnail"
          src={product.thumbnail} 
          alt={product.explanation} 
        />
      }
      <div className="item-info">
        <h1 className="name">{product?.name}</h1>
        <span className="price">{product?.price}</span>
        <p className="explanation">{product?.explanation}</p>

        <styles.GoToProductPurchaseButton onClick={handlePurchaseButtonClick}>
          구매하기
        </styles.GoToProductPurchaseButton>
      </div>
    </styles.ProductDetailContainer>
  );
}

export default ProductDetail;
