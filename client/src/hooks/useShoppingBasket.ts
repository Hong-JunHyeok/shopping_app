import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { ProductType } from "../components/product/Product.types";

const COOKIE_KEY = 'shopping_basket';

const useShoppingBasket = () => {
  const [cookies, setCookies] = useCookies([COOKIE_KEY]);
  const [isLoading, setIsLoading] = useState(false);
  const [shoppingBasket, setShoppingBasket] = useState<ProductType[]>([]);

  const getProductById = async (id: number) => {
    const response = await fetch(`/product/${id}`)
    return response.json();
  }

  // TODO: 상품 정보 자체를 받는것이 아니라 id를 넘겨받아서 저장해야 함.
  const addShoppingBasket = (id: number | number[]) => {
    const nextShoppingBasket = id instanceof Array
      ? [...shoppingBasket, ...id]
      : [...shoppingBasket, id];

    setCookies(COOKIE_KEY, nextShoppingBasket);
  }

  useEffect(() => {
    // TODO: Promise all 작업해야 함.
    const productIds = cookies.shopping_basket as ProductType[] ?? [];

    setIsLoading(true);

    productIds.forEach(({ id }) => {
      getProductById(id)
        .then((product: ProductType) => setShoppingBasket(prev => [...prev, product]));
    })
  }, [cookies.shopping_basket])

  return {
    shoppingBasket,
    addShoppingBasket
  }
}

export default useShoppingBasket;