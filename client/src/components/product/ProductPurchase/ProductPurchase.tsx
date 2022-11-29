import {  } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import * as styles from './ProductPurchase.styles';

import { ProductType } from "../Product.types";

interface Props {
  onClickPurchaseButton: () => void;
}

const ProductPurchase = ({ 
  onClickPurchaseButton
}: Props) => {
  const [cookies] = useCookies(['shopping_basket']);
  const shoppingBasketItems = cookies.shopping_basket as ProductType[] ?? [];
  
  const purchaseAmount = shoppingBasketItems.reduce((prev, cur) => prev + cur.price, 0);

  return (
    <>
      <styles.ProductPurchaseContainer>
        <h2 className="purchase-title">구매하시기 전 확인해보세요.</h2>

        {shoppingBasketItems.map((product) => (
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
        ))}

      </styles.ProductPurchaseContainer>
      <styles.PurchaseButton onClick={onClickPurchaseButton}>
        총 {purchaseAmount}원 구매
      </styles.PurchaseButton>
    </>
  )
};

export default ProductPurchase;
