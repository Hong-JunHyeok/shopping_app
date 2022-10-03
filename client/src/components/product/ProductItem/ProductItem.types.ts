import { ProductType } from "../Product.types";

export interface ProductItemProps {
  product: ProductType;
  onDelete: (id: number) => void;
  onUpdate: (product: ProductType) => void;
}
