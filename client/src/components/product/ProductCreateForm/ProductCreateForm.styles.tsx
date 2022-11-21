import styled from "@emotion/styled";

export const FormContainer = styled.form`
  position: fixed;
  bottom: 7rem;
  right: 1rem;

  width: 400px;
  border-radius: 10px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f2f2f2;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  & > input {
    width: 100%;
    margin: 1rem 0;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
  }

  & > input[type="submit"] {
    background-color: #50a14e;
    color: white;
  }

  & > img {
    width: 100%;
    height: 300px;
    margin-bottom: 1rem;
  }
`;
