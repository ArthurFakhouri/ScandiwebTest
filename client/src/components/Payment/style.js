import styled from "styled-components";

export const PaymentC = styled.div`
    display: flex;
    flex-direction: column;
    margin: 32px 0;
    width: 280px;
`

export const SubText = styled.span`
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`

export const Value = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`

export const Total = styled.span`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
`

export const Order = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 16px;
    background: #5ECE7B;
    color: white;
    font-weight: 600;
    font-size: 14px;
    line-height: 16.8px;
    border: none;
    transition: .5s filter;

    &:hover{
        cursor: pointer;
        filter: brightness(85%);
    }
`