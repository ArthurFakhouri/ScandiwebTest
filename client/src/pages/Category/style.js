import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #1D1F22;
`

export const Name = styled.h2`
    text-transform: capitalize;
    font-weight: 400;
    font-size: 42px;
    line-height: 67.2px;
`

export const Categories = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;

    & > li {
        margin-top: 60px;
        margin-right: 40px;
        transition: .5s box-shadow, .5s transform;
    }

    & > li:hover {
        box-shadow: 2px 2px 5px 3px rgb(237, 237, 237);
        transform: translate(5px, -5px);
        cursor: pointer;
        button {
            opacity: 1;
        }
    }
`

export const CategoryItem = styled.li`
    padding: 15px;
    width: 386px;
    ${(props) => !props.inStock ? "color: #8D8F9A;" : ""}

    & > div {
        width: 350px;
        height: 330px;
        margin-bottom: 24px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > div > span {
        position: absolute;
        color: #8D8F9A;
        font-weight: 400;
        font-size: 24px;
        line-height: 38.4px;
    }

    & > div > img {
        ${(props) => !props.inStock ? "opacity: .5;" : ""}
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    section {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        line-height: 28.8px;
        font-weight: 300;
    }

    section > span:nth-child(2){
        font-weight: 500;
    }

    button {
        width: 52px;
        height: 52px;
        display: flex;
        opacity: 0;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 50%;
        background: #5ECE7B;
        position: absolute;
        right: 26px;
        bottom: -26px;
        transition: .5s filter, .2s opacity;
    }
    
    button:hover{
        cursor: pointer;
        filter: brightness(85%);
    }
`