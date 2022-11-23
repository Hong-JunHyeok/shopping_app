import styled from "@emotion/styled";
 
 
interface Props {
 children: React.ReactNode;
}
 
const ModalBackground = styled.div`
 position: fixed;
 z-index: 200;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 width: 100%;
 height: 100%;
 overflow: auto;
 background-color: rgba(0, 0, 0, .65);
 text-align: initial;
 color: #4A4D50;
 display: flex;
 align-items: center;
 justify-content: center;
`;
 
const ModalContent = styled.div`
 background-color: white;
 border-radius: 20px;
 padding: 1rem;
`;
 
const Modal = ({ children }: Props) => {
 return (
   <ModalBackground>
     <ModalContent>
       {children}
     </ModalContent>
   </ModalBackground>
 )
}
 
export default Modal;
