import styled from "@emotion/styled";

export const ShoppingBasketContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 1000px;
    border: 1px solid #e0e0e0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    padding: 1rem;

    .shopping-basket-title {
        font-size: 2rem;
        
    }
`;

export const ShoppingBasketList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const ShoppingBasketItem = styled.li`
    height: 100px;

    .name {
        display: inline;
        margin-right: 5px;
        font-weight: 700;
        font-size: 14px;
        color: #55575f;
    }

    .price {
        display: inline;
        font-weight: 700;
        font-size: 14px;
        color: #50a14e;

        &::after {
            content: "원"
        }
    }

    .thumbnail {
        width: 78px;
        height: 78px;
        float: left;
        margin-right: 1rem;
    }
`

export const GoToPurchasePage = styled.button`
    width: 100%;
    background-color: #50a14e;
    color: white;
    margin: 1rem 0;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 3px;
`
