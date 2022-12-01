import { BsFillCartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import * as styles from './NavigationBar.styles';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handlePushMainpage = () => navigate('/');

  const handlePushShoppingBasketPage = () => navigate('/shopping-basket');

  return (
    <styles.NavigationBarContainer>
      <styles.Title onClick={handlePushMainpage}>Shopping App</styles.Title>

      <styles.ShoppingBasketButton 
        onClick={handlePushShoppingBasketPage}  
        type="button"
      >
        <BsFillCartFill size={30} />
      </styles.ShoppingBasketButton>
    </styles.NavigationBarContainer>
  )
}

export default NavigationBar;