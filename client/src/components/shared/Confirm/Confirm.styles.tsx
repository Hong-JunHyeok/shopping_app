import styled from "@emotion/styled";

export const ConfirmTitle = styled.h2`    
    margin: 0px -20px 0px -20px;
    padding: 1rem;
    padding-top: 0;
    border-bottom: 1px solid rgba(0, 0, 0, .06);
    word-break: keep-all;
`;

export const ConfirmContent = styled.div`
    width: 500px;
    overflow: auto;
    padding: 20px 0;
`;

export const ButtonGroup = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    border-top: 1px solid rgba(0, 0, 0, .04);
    margin-left: -20px;
    margin-right: -20px;
    padding: 20px 20px 0;
    box-sizing: border-box;
    text-align: right;

    & > button {
        width: 80px;
        padding: 0.5rem;
        border: none;
        border-radius: 10px;
        margin-left: 1rem;

        cursor: pointer;

        background-color: #50a14e;
        color: white;
    }
`;
