import { ChangeEvent, useRef } from "react";
import * as styles from "./ProductThumbnailUploader.styles";

type Props = {
  value: File | null;
  onChange: (value: File | null) => void;
  onClickThumbnail?: () => void;
  onUpload?: (value: File | null) => void;
  onError?: (error: Error) => void;
};

const ProductThumbnailUploader = ({
  value,
  onChange,
  onClickThumbnail,
  onUpload,
  onError,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) onChange(event.target.files[0]);
  };

  const handleUploadButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleClickThumbnail = () => {
    if (onClickThumbnail) onClickThumbnail();
  };

  return (
    <>
      <input
        type="file"
        multiple={false}
        onChange={handleChangeInput}
        hidden
        ref={inputRef}
      />
      {value && (
        <styles.Image
          src={URL.createObjectURL(value)}
          alt={value.name}
          onClick={handleClickThumbnail}
        />
      )}
      <styles.UploadButton type="button" onClick={handleUploadButtonClick}>
        썸네일 업로드
      </styles.UploadButton>
    </>
  );
};

export default ProductThumbnailUploader;
