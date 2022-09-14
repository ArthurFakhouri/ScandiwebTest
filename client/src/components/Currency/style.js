import styled from "styled-components";

export const OptionSelected = styled.main`
    margin-right: 10px;
    cursor: pointer;
    z-index: 1;

    span {
        margin: 0 10px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28.8px;
        color: #1D1F22;
    }

    img {
        width: 7px;
        transform: ${props => props.active ? "rotateZ(180deg)" : ""};
        transition: .3s transform;
    }
`

export const Options = styled.ul`
    display: flex;
    ${props => props.active ?
        "visibility: visible;transition: all .5s ease 0s;transition-delay: 0s, 0s, .3s;max-height: 500px;"
        :
        "visibility: hidden;transition: all .3s ease 0s;max-height: 0;"
    }
    overflow: hidden;
    flex-direction: column;
    position: absolute;
    margin-top: 30px;
    margin-right: auto;
    background: white;
    box-shadow: 2px 2px 5px 3px rgb(237, 237, 237);
    user-select: none;

    li{
        padding: 10px;
        transition: .5s background;
    }
    li:hover{
        cursor: pointer;
        background: rgb(237, 237, 237);
    }
`