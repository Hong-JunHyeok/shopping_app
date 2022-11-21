import styled from "@emotion/styled";

export const Button = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  width: 80px;
  height: 80px;
  padding: 1rem;
  border-radius: 50%;
  margin: 0;
  border: none;

  cursor: pointer;

  background-color: #50a14e;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: ease-in-out .2s;

  &:hover {
    transform: scale(110%);
  }
`;