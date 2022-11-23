import { useParams } from "react-router-dom";

import ProductDetail from "../components/product/ProductDetail";

function ProductDetailPage() {
  const { productId = '' } = useParams<{ productId: string }>();

  return (
    <ProductDetail productId={productId} />
  );
}

export default ProductDetailPage;
