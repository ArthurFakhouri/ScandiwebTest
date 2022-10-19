import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
`

export const Gallery = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    height: 511px;
    padding-right: 15px;
    overflow: auto;
    overflow-x: hidden;

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

    li {
        width: 80px;
        height: 80px;
    }

    li + li {
        margin-top: 32px;
        margin-left: 2px;
    }
`

export const Image = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border: ${props=>props.selected?"solid 2px #5ECE7B":""};
`

export const MainImage = styled.img`
    width: 610px;
    height: 511px;
    object-fit: contain;
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 600px;
    margin-left: 100px;
    font-size: 30px;
`

export const Brand = styled.span`
    font-weight: 600;
`

export const Name = styled.span`
    font-weight: 400;
`

export const PriceText = styled.span`
    font-family: Roboto Condensed;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 18px;
    margin-top: 36px;
`

export const Price = styled.span`
    margin-top: 10px;
    font-family: Raleway;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
`

export const AddToCart = styled.button`
    display: flex;
    ${props=>props.inStock?"":"pointer-events: none;opacity: 0.7;"}
    height: 50px;
    border: none;
    color: white;
    margin-top: 20px;
    background: #5ECE7B;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: Raleway;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    transition: .5s filter;

    &:hover{
        cursor: pointer;
        filter: brightness(85%);
    }
`

export const Description = styled.div`
    margin-top: 40px;
    height: 100px;
    padding-right: 15px;
    overflow: auto;
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #1D1F22;
`