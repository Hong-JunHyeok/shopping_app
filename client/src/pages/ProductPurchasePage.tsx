import { useParams } from "react-router-dom";
import ProductPurchase from "../components/product/ProductPurchase";
import Confirm from "../components/shared/Confirm/Confirm";
 
const ProductPurchasePage = () => {
 const { productId = '' } = useParams<{ productId: string }>();
 
 return (
   <>
     <ProductPurchase
        productId={productId}
     />
    
     <Confirm 
        title='정말로 구매하시겠습니까?'
        content="신중하게 결정해주세요."
        open={true}
     />
   </>
 )
}
 
export default ProductPurchasePage;
