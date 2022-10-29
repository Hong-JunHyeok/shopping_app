import styled from "@emotion/styled";

export const UploadButton = styled.button`
  background-color: #50a14e;
  color: #f2f2f2;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const Image = styled.img`
  width: 160px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
`;
