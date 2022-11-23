import styled from "@emotion/styled";

export const ProductPurchaseContainer = styled.div`
  .purchase-title {
    font-size: 28px;
    text-align: center;
  }

  .product-info {
    margin: 0 auto;
    width: 1000px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 20px;
    overflow: hidden;

    .thumbnail {
      width: 200px;
      height: 200px;
      float: left;
      margin-right: 1rem;
    }

    .name {
      display: inline-block;
      font-size: 24px;
      color: #000;
      text-decoration: none;
      font-weight: bold;
    }

    .price {
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
      height: 100%;
    }
  }
`;

export const PurchaseButton = styled.button`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 1000px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #50a14e;
  color: white;
  margin: 0 auto;
  padding: 1rem;
`