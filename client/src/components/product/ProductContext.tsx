import React, { createContext, useContext, useState } from "react";

import { ProductType } from './Product.types';

type ProductContextType = [
  ProductType[],
  React.Dispatch<React.SetStateAction<ProductType[]>>
];

// Context
const ProductContext = createContext<ProductContextType | null>(null);
const initialValue: ProductType[] = [];

// Provider
export function ProductProvider({ children }: { children: React.ReactNode }) {
  const productState = useState<ProductType[]>(initialValue);

  return (
    <ProductContext.Provider value={productState}>
      {children}
    </ProductContext.Provider>
  );
}

// Consumer
export function useProductContext() {
  return useContext(ProductContext) as ProductContextType;
}
