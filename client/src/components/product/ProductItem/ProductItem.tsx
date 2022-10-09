import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import { ProductItemProps } from "./ProductItem.types";
import UpdateForm from "./UpdateForm";

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div>
      <div>{product.id}</div>
      <div>
        <Link to={`/${product.id}`}>{product.name}</Link>
      </div>
      <div>{product.price}</div>
      <div>{product.explanation}</div>

      <DeleteButton id={product.id} />
      <UpdateForm product={product} />
    </div>
  );
};

export default ProductItem;
