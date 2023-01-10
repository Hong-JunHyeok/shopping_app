import { useNavigate } from 'react-router-dom';

import useShoppingBasket from '../../../hooks/useShoppingBasket';
import Loading from '../../shared/Loading';

import * as styles from './ShoppingBasket.styles';

const ShoppingBasket = () => {
    const navigate = useNavigate();
    const { isLoading, shoppingBasket } = useShoppingBasket();

    const handleClickGoToPurchaseButton = () => {
        navigate('/purchase')
    }

    if (isLoading) return <Loading />

    return (
        <styles.ShoppingBasketContainer>
            <h3 className="shopping-basket-title">나의 장바구니</h3>

            {!shoppingBasket || shoppingBasket.length === 0
                ? <h3>장바구니에 담은 아이템이 없습니다.</h3>
                : (
                <>
                    <styles.ShoppingBasketList>
                        {shoppingBasket.map((item) => 
                            <styles.ShoppingBasketItem key={item?.id}>
                                {item?.thumbnail && 
                                    <img 
                                        className="thumbnail"
                                        src={item?.thumbnail} 
                                        alt={item?.explanation} 
                                    />
                                }

                                <h3 className='name'>{item?.name}</h3>
                                <span className='price'>{item?.price}</span>

                                <p className='explanation'>{item?.explanation}</p>
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
