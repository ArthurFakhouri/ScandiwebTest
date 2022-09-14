import styled from "styled-components";


export const Cart = styled.div`
    display: flex;
    margin: 0 5px;
    z-index: 1;

    & > img{
        width: 20px;
    }
    & > span{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 50%;
        background-color: black;
        color: white;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;
        line-height: 16.41px;
        margin-left: 10px;
        margin-top: -5px;
    }
    &:hover{
        cursor: pointer;
    }
`