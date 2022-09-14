import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 325px;
    margin-left: -232px;
    margin-top: 32px;
    padding: 32px 16px;
    overflow: hidden;
    background-color: white;
    color: #1D1F22;
    ${props => props.active ?
        "visibility: visible;z-index: 1;transition: all .5s ease 0s;transition-delay: 0s, 0s, .3s;max-height: 680px;"
        :
        "visibility: hidden;transition: all .3s ease 0s;max-height: 0;"
    }
`

export const Title = styled.span`

    font-size: 16px;
    font-weight: 700;
    line-height: 25.6px;

    span {
        font-weight: 500;
    }
`

export const Bag = styled.ul`
    margin-top: 32px;
    max-height: 425px;
    overflow: hidden;
    overflow-y: auto;
    list-style: none;
    padding-right: 5px;

    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background-color: #1d1f221f;
        border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb {
        background: #1D1F22;
        border-radius: 3px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        filter: brightness(85%);
    }
`

export const Total = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    margin-top: 40px;
    margin-bottom: 32px;

    span:nth-child(1){
        font-family: Roboto;
        font-weight: 500;
        line-height: 18px;
    }

    span:nth-child(2){
        margin-left: auto;
        font-weight: 700;
        line-height: 160%;
    }
`

export const Actions = styled.section`
    display: flex;
    flex-direction: row;

    button{
        width: 140px;
        height: 43px;
        font-weight: 600;
        font-size: 14px;
        line-height: 120%;
        border: none;
        background-color: #5ECE7B;
        color: white;
        cursor: pointer;
        transition: .5s filter;
    }
    button:nth-child(1) {
        border: solid 1px #1D1F22;
        color: #1D1F22;
        background-color: white;
    }
    button:nth-child(2) {
        margin-left: auto;
    }

    button:hover{
        filter: brightness(85%);
    }
`