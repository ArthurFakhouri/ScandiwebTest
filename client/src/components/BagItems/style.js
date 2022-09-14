import styled from "styled-components";

export const BagItem = styled.li`
    display: flex;
    flex-direction: row;
    height: 190px;
    & + li{
        margin-top: 40px;
    }
`

export const Brand = styled.span`
    font-weight: ${props=>props.theme === "cart-overlay"?"300":"600"};
    font-size: ${props=>props.theme === "cart-overlay"?"16px":"30px"};
    line-height: ${props=>props.theme === "cart-overlay"?"25.6px":"27px"};
`

export const Name = styled.span`
    font-weight: ${props=>props.theme === "cart-overlay"?"300":"400"};
    font-size: ${props=>props.theme === "cart-overlay"?"16px":"30px"};
    line-height: ${props=>props.theme === "cart-overlay"?"25.6px":"27px"};
    margin-top: ${props => props.theme === "cart-overlay" ? "4px" : "16px"};
`

export const Price = styled.span`
    font-weight: ${props => props.theme === "cart-overlay" ? "500" : "700"};
    font-size: ${props => props.theme === "cart-overlay" ? "16px" : "24px"};
    line-height: ${props => props.theme === "cart-overlay" ? "25.6px" : "24px"};
    margin-top: ${props => props.theme === "cart-overlay" ? "4px" : "20px"};
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const Section = styled.section`
    display: flex;
    margin-left: auto;
    margin-right: 0;
`

export const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 24px;
    margin: 0 5px;
    margin-right: ${props => props.theme === "cart-overlay" ? "5px" : "24px"};
    
    button{
        background-color: white;
        color: #1D1F22;
        border: solid 1px #1D1F22;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: 300;
        width: ${props => props.theme === "cart-overlay" ? "24px" : "45px"};
        height: ${props => props.theme === "cart-overlay" ? "24px" : "45px"};
        cursor: pointer;
        transition: .5s filter;
    }

    button:hover{
        filter: brightness(85%);
    }

    & > span {
        margin-right: ${props => props.theme === "cart-overlay" ? "0" : "-20px"};
        font-weight: 500;
        font-size: ${props => props.theme === "cart-overlay" ? "16px" : "24px"};
        line-height: ${props => props.theme === "cart-overlay" ? "25.6px" : "38.4px"};
    }
`

export const Gallery = styled.div`
    width: ${props => props.theme === "cart-overlay" ? "121px" : "200px"};
    height: 100%;
    position: relative;
`

export const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    visibility: ${props => props.selected ? "visible" : "hidden"};
`

export const SelectImage = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 4;
    bottom: 16px;
    right: 16px;

    button {
        width: 24px;
        height: 24px;
        font-size: 20px;
        line-height: 18px;
        border: none;
        color: white;
        background: rgba(0, 0, 0, 0.73);
        bottom: 0;
        right: 0;
        transition: .5s background;
    }

    button:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.55);
    }

    button + button {
        margin-left: 8px;
    }
`
