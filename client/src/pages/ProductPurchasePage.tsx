import { useParams } from "react-router-dom";
import ProductPurchase from "../components/product/ProductPurchase";

const ProductPurchasePage = () => {
  const { productId = '' } = useParams<{ productId: string }>();

  return <ProductPurchase productId={productId} />
}

export default ProductPurchasePage;