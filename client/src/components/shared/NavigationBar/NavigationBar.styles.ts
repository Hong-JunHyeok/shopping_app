import styled from "@emotion/styled";

export const NavigationBarContainer = styled.header`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  background-color: white;
  height: 80px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const ShoppingBasketButton = styled.button`
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: inherit;
  border: none;
  cursor: pointer;
  color: #50a14e;

  &::after {
    margin-top: 10px;
    content: '장바구니';
    color: black;
  }
`;