import { IoIosCreate } from 'react-icons/io';

import * as styles from './ProductCreateButton.styles';

interface Props {
  onClick: () => void;
}

const ProductCreateButton = ({
  onClick  
}: Props) => {
  return (
    <>
      <styles.Button
        type="button"
        onClick={onClick}
      >
        <IoIosCreate 
          size={40}
        />
      </styles.Button>
    </>
  )
}

export default ProductCreateButton;