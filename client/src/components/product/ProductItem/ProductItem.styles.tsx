import styled from "@emotion/styled";

interface Props {
  isEdit?: boolean;
}

export const ProductItemContainer = styled.div<Props>`
  position: relative;
  padding: 0;
  padding: 1rem 0;
  border-bottom: 1px solid #57606a;
  min-height: 300px;

  .name {
    display: inline-block;
    font-size: 24px;
    color: #000;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .price {
    display: block;
    font-weight: 700;
    color: #f24443;
    font-size: 15px;

    &::after {
      content: '원'
    }
  }

  .thumbnail {
    width: 200px;
    height: 200px;
    float: left;
    margin-right: 1rem;
  }    

  .explanation {
    margin: 0;
    color: #57606a;
    overflow-y: auto;
    height: 100px;
    ${({ isEdit }) => isEdit && ' display: none; '}
  }

  .button-group {
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    & > button {
      padding: 10px 20px;
    }
  }
`

export const ProductEditContainer = styled.form`
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > input {
    width: 100%;
    margin-bottom: 1rem;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
  }

  & > input[type="submit"] {
    background-color: #50a14e;
    color: white;
  }
`;