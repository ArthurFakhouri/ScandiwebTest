import styled from "styled-components";

export const Default = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props=>props.theme === "cart-overlay"?
    props=>props.name === "size"?"24px":"63px"
    :
    "63px"};
    height: ${props=>props.theme === "cart-overlay"?"24px":"45px"};
    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: ${props=>props.theme === "cart-overlay"?"14px":"16px"};
    line-height: ${props=>props.theme === "cart-overlay"?"22.4px":"18px"};
    transition: .5s background;
    ${props=>props.disabled?"pointer-events: none;transition: none;":""}
    ${props=>props.selected?
    "background: #1D1F22;color: white;":
    "border: solid 1px #1D1F22;"}
    cursor: pointer;

    &:hover{
        background: ${props=>props.selected?"#1d1f22dc":"#c2c2c2"};
    }
`

export const Color = styled.li`
    display: flex;
    justify-content: center;
    width: ${props=>props.theme === "cart-overlay"?"16px":"32px"};
    height: ${props=>props.theme === "cart-overlay"?"16px":"32px"};
    background-color: ${props=>props.color};
    position: relative;
    ${props=>props.selected?
    "border: solid 1px white;margin-bottom: 1px;":
    ""}
    transition: .5s filter;
    ${props=>props.disabled?"pointer-events: none;transition: none;":""}

    &:before{
        content: "";
        position: absolute;
        top: ${props=>props.selected?"-2px":""};
        left: ${props=>props.selected?"-2px":""};
        right: ${props=>props.selected?"-2px":""};
        bottom: ${props=>props.selected?"-2px":""};
        border: ${props=>props.selected?"solid 1px #5ECE7B":""};
    }
    cursor: pointer;

    &:hover{
        filter: brightness(75%);
    }
`