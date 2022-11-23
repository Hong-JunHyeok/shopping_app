import { useEffect, useState } from "react";

import Loading from "../../shared/Loading";
import * as styles from './ProductPurchase.styles';

import { ProductType } from "../Product.types";

interface Props {
  productId: string;
}

const ProductPurchase = ({ productId }: Props) => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const purchaseAmount = product?.price ?? 0;

  useEffect(() => {
    setIsLoading(true);

    fetch(`/product/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.product))
      .finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading) return <Loading />

  return (
    <>
      <styles.ProductPurchaseContainer>
        <h2 className="purchase-title">구매하시기 전 확인해보세요.</h2>

        <div className="product-info">
          {product?.thumbnail && 
            <img 
              className="thumbnail"
              src={product.thumbnail} 
              alt={product.explanation} 
            />
          }
          <h1 className="name">{product?.name}</h1>
          <span className="price">{product?.price}</span>
          <p className="explanation">{product?.explanation}</p>
        </div>
      </styles.ProductPurchaseContainer>
      <styles.PurchaseButton>
        총 {purchaseAmount}원 구매
      </styles.PurchaseButton>
    </>
  )
};

export default ProductPurchase;