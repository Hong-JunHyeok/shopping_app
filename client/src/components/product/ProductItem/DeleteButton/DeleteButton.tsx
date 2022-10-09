import { useProductContext } from "../../../../contexts/ProductContext";

interface Props {
  id: number;
}

const DeleteButton = ({ id }: Props) => {
  const [, setProducts] = useProductContext();

  const handleDelete = (id: number) => {
    fetch(`/product/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setProducts((prev) => prev.filter((product) => product.id !== id));
      }
    });
  };

  return (
    <button type="button" onClick={() => handleDelete(id)}>
      삭제하기
    </button>
  );
};

export default DeleteButton;
