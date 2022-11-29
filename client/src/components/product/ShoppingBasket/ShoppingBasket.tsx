import { useCookies } from 'react-cookie';

import * as styles from './ShoppingBasket.styles';
import { ProductType } from '../Product.types';
import { useNavigate } from 'react-router-dom';

const ShoppingBasket = () => {
    const navigate = useNavigate();
    const [cookies] = useCookies(['shopping_basket']);

    const shoppingBasketItems = cookies.shopping_basket as ProductType[];

    const handleClickGoToPurchaseButton = () => {
        navigate('/purchase')
    }

    return (
        <styles.ShoppingBasketContainer>
            <h3 className="shopping-basket-title">나의 장바구니</h3>

            {!shoppingBasketItems || shoppingBasketItems.length === 0
                ? <h3>장바구니에 담은 아이템이 없습니다.</h3>
                : (
                <>
                    <styles.ShoppingBasketList>
                        {shoppingBasketItems.map((item) => 
                            <styles.ShoppingBasketItem key={item.id}>
                                {item?.thumbnail && 
                                    <img 
                                        className="thumbnail"
                                        src={item.thumbnail} 
                                        alt={item.explanation} 
                                    />
                                }

                                <h3 className='name'>{item.name}</h3>
                                <span className='price'>{item.price}</span>

                                <p className='explanation'>{item.explanation}</p>
                            </styles.ShoppingBasketItem>
                        )}
                    </styles.ShoppingBasketList>
                    <styles.GoToPurchasePage onClick={handleClickGoToPurchaseButton}>
                        구매하기
                    </styles.GoToPurchasePage>
                </>
                )
            }
            
        </styles.ShoppingBasketContainer>
    )
}

export default ShoppingBasket;
