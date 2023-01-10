import { useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";

import { ProductType } from "../components/product/Product.types";

const COOKIE_KEY = 'shopping_basket';

const useShoppingBasket = () => {
  const [cookies, setCookies] = useCookies([COOKIE_KEY]);
  const [isLoading, setIsLoading] = useState(false);
  const [shoppingBasket, setShoppingBasket] = useState<ProductType[]>([]);

  const productIds = useMemo(() => (cookies.shopping_basket as string[]) ?? [], [cookies.shopping_basket]);;

  const addShoppingBasket = (id: number) => {
    const nextShoppingBasket = [...productIds, id];
  
    setCookies(
      COOKIE_KEY, 
      nextShoppingBasket, 
      {
        path: '/',
      }
    );
  }

  const getProductById = async (id: string) => {
    const response = await fetch(`/product/${id}`)
    return response.json();
  }

  useEffect(() => {
    if (productIds && productIds.length) {
      const requestList: Array<Promise<any>> = [];
  
      setIsLoading(true);
  
      productIds.forEach((id) => {
        requestList.push(getProductById(id));
      })
  
      Promise.all(requestList)
        .then((response) => {
          const shoppingBasketList: ProductType[] = response.map((item) => item.product);
          setShoppingBasket(shoppingBasketList);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [productIds])

  return {
    isLoading,
    shoppingBasket,
    addShoppingBasket
  }
}

export default useShoppingBasket;
