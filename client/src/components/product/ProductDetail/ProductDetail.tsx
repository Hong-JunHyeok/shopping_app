import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

import Loading from "../../shared/Loading";
import Confirm from '../../shared/Confirm';
import * as styles from './ProductDetail.styles';
import { ProductType } from "../Product.types";
import { useNavigate } from "react-router-dom";

interface Props {
  productId: string;
}

const ProductDetail = ({ productId }: Props) => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(['shopping_basket']);

  const shoppingBasketItems = cookies.shopping_basket as ProductType[];

  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShoppingBasketAdd = () => {
    const nextValue = shoppingBasketItems ? [...shoppingBasketItems, product] : [product];

    setCookies('shopping_basket', nextValue);
    setIsModalOpen(true);
  }

  const handleConfirmModal = () => {
    navigate('/shopping-basket');
    setIsModalOpen(false);
  }

  const handleCancelModal = () => {
    setIsModalOpen(false);
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
    <>
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

          <styles.ShoppingBasketAddButton 
            onClick={handleShoppingBasketAdd}
          >
            장바구니 담기
          </styles.ShoppingBasketAddButton>
        </div>
      </styles.ProductDetailContainer>
        
      {isModalOpen && 
        <Confirm
          title="알림"
          content="상품이 담겼습니다. 장바구니로 이동하시겠습니까?"
          onCancel={handleCancelModal}
          onConfirm={handleConfirmModal}
        />
      }
    </>
  );
}

export default ProductDetail;
