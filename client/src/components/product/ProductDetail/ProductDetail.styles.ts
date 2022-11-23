import styled from "@emotion/styled";

export const ProductDetailContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 1000px;
  display: flex;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
  overflow: hidden;

  .thumbnail {
    width: 500px;
    height: 500px;
  }

  .item-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;

    .name {
      display: inline-block;
      font-size: 24px;
      color: #000;
      text-decoration: none;
      font-weight: bold;
    }

    .price {
      text-align: end;
      display: block;
      font-weight: 700;
      color: #f24443;
      font-size: 18px;

      &::after {
        content: '원'
      }
    }

    .explanation {
      color: #57606a;
    }
  }
`;

export const GoToProductPurchaseButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  margin: 0;
  border: none;
  cursor: pointer;
  background-color: #50a14e;
  color: white;
  margin-top: auto;
`;