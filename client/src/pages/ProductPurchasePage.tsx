import { useState } from "react";
import ProductPurchase from "../components/product/ProductPurchase";
import Confirm from "../components/shared/Confirm/Confirm";
 
const ProductPurchasePage = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleOpenModal = () => {
   setIsModalOpen(true);
 }

 const handleCloseModal = () => {
   setIsModalOpen(false);
 }
 
 return (
   <>
     <ProductPurchase
        onClickPurchaseButton={handleOpenModal}
     />
    
     <Confirm 
        title='정말로 구매하시겠습니까?'
        content="신중하게 결정해주세요."
        open={isModalOpen}
        onCancel={handleCloseModal}
     />
   </>
 )
}

export default ProductPurchasePage;
