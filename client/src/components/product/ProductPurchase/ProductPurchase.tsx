import * as styles from './ProductPurchase.styles';

import useShoppingBasket from '../../../hooks/useShoppingBasket';
import Loading from '../../shared/Loading';

interface Props {
  onClickPurchaseButton: () => void;
}

const ProductPurchase = ({ 
  onClickPurchaseButton
}: Props) => {
  const { shoppingBasket, isLoading } = useShoppingBasket();

  const purchaseAmount = shoppingBasket.reduce((prev, cur) => prev + cur.price, 0);

  if (isLoading) return <Loading />

  return (
    <>
      <styles.ProductPurchaseContainer>
        <h2 className="purchase-title">구매하시기 전 확인해보세요.</h2>

        {shoppingBasket.map((product) => (
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
