import { useState } from "react";

import { ProductProvider } from "../components/product/ProductContext";

import ProductCreateForm from "../components/product/ProductCreateForm";
import ProductList from "../components/product/ProductList";
import ProductCreateButton from "../components/product/ProductCreateButton";

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <ProductProvider>
      <ProductList />

      {isOpen && <ProductCreateForm />}
      <ProductCreateButton 
        onClick={handleButtonClick}
      />
    </ProductProvider>
  );
}

export default MainPage;
