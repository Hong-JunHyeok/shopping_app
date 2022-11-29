import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

import Loading from "../../shared/Loading";
import * as styles from './ProductDetail.styles';
import { ProductType } from "../Product.types";

interface Props {
  productId: string;
}

const ProductDetail = ({ productId }: Props) => {
  const [cookies, setCookies] = useCookies(['shopping_basket']);

  const shoppingBasketItems = cookies.shopping_basket as ProductType[];

  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleShoppingBasketAdd = () => {
    const nextValue = shoppingBasketItems ? [...shoppingBasketItems, product] : [product];

    setCookies('shopping_basket', nextValue);
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

        <styles.ShoppingBasketAddButton 
          onClick={handleShoppingBasketAdd}
        >
          장바구니 담기
        </styles.ShoppingBasketAddButton>
      </div>
    </styles.ProductDetailContainer>
  );
}

export default ProductDetail;
