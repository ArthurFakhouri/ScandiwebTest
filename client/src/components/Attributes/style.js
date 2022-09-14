import styled from "styled-components";

export const AttributesC = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    color: #1D1F22;
    overflow-y: ${props => props.theme === "cart-overlay" ? "auto" : "hidden"};
    overflow-x: hidden;
    padding-left: 1px;
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

    & > li{
        margin-top: ${props => props.theme === "cart-overlay" ? "8px" : "20px"};
    }
`

export const Attribute = styled.li`
    display: flex;
    text-transform: ${props => props.theme === "cart-overlay" ? "capitalize" : "uppercase"};
    flex-direction: ${props => props.name !== "size" &&
        props.name !== "capacity" && props.name !== "color" ? "row" : "column"};

    & > span{
        font-family: ${props => props.theme === "cart-overlay" ? "Raleway" : "Roboto Condensed"};
        font-size: ${props => props.theme === "cart-overlay" ? "14px" : "18px"};
        font-weight: ${props => props.theme === "cart-overlay" ? "400" : "700"};
        line-height: ${props => props.theme === "cart-overlay" ? "16px" : "18px"};
    }

    & > ul{
        ${props => props.name !== "size" &&
        props.name !== "capacity" && props.name !== "color" ? "margin-left: 8px;margin-top: -3px;" : "margin-top: 8px;"};
    }

    & > ul > li + li{
        margin-left: ${props => props.theme === "cart-overlay" ? "8px" : "12px"};
    }
`

export const Options = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`