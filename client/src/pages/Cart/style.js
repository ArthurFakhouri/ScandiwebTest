import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;

    & > span {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
    }
`

export const Bag = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    max-height: 675px;
    overflow: auto;
    overflow-x: hidden;
    margin-top: 50px;

    & > li {
        border-bottom: solid 1px #E5E5E5;
        border-top: solid 1px #E5E5E5;
        padding: 24px 0;
        height: 340px;
        min-height: 340px;
        margin-bottom: 5px;
    }

    & > li + li {
        border-bottom: solid 1px #E5E5E5;
        border-top: none;
    }

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