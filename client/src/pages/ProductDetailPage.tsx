import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type ProductType = {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    fetch(`/product/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.product));
  }, []);

  return (
    <div>
      <h1>{product?.name}</h1>
      <span>{product?.price}</span>
      <p>{product?.explanation}</p>
    </div>
  );
}

export default ProductDetailPage;
