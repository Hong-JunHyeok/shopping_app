import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Content = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled.h2`
  margin-top: 300px;
`;

const RedirectButton = styled.button`
  margin: 0 auto;
  padding: 1rem;
  border: none;
  background-color: #50a14e;
  color: white;
  cursor: pointer;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleRedirectMain = () => {
    navigate('/');
  }

  return (
    <Content>
      <PageTitle>페이지를 찾을 수 없습니다.</PageTitle>
      <RedirectButton 
        type="button"
        onClick={handleRedirectMain}
      >
        메인 페이지로
      </RedirectButton>
    </Content>
  )
}

export default NotFoundPage;