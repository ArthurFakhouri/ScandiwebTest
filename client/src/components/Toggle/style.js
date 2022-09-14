import styled, { css, keyframes } from "styled-components";


export const Base = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    ${props=>props.disabled?
    "pointer-events: none;":
    "background: #1D1F22;"}
    align-items: center;
    cursor: pointer;
    transition: .5s transform, .5s box-shadow;

    &:hover{
        transform: translate(1px, -1px);
        box-shadow: 1px 1px 2px #1D1F22;
    }
`

export const Toggler = styled.div`
    width: 23px;
    height: 23px;
    background: white;
    position: relative;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`

function animate(name) {
    return css`animation: ${name} .4s both cubic-bezier(.5, 0.885, 0.32, 1.275)`;
}

export const Stick = styled.div`
    background: red;
    width: 13px;
    height: 2px;
    transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: absolute;
    transform: rotateZ(90deg);
`

export const Stick1 = styled(Stick)`
    ${props => props.toggle ? animate(stick1Toggle) : animate(stick1Untoggle)}
`

export const Stick2 = styled(Stick)`
    ${props => props.toggle ? animate(stick2Toggle) : animate(stick2Untoggle)}
`

const stick1Toggle = keyframes`
    0% {
        transform: rotateZ(135deg);
    }

    20%{
        transform: rotateZ(90deg);
    }

    100% {
        transform: translateX(-3px) translateY(3px) rotateZ(45deg);
        width: 5px;
        background: #13995a;
    }
`

const stick1Untoggle = keyframes`
    0% {
        transform: translateX(-4px) rotateZ(45deg);
        width: 5px;
    }

    20%{
        transform: rotateZ(90deg);
    }

    100% {
        transform: rotateZ(135deg);
        width: 13px;
    }
`

const stick2Toggle = keyframes`
    0% {
        transform: rotateZ(45deg);
    }

    20%{
        transform: rotateZ(90deg);
    }

    100% {
        transform: translateX(2px) rotateZ(135deg);
        background: #13995a;
    }
`

const stick2Untoggle = keyframes`
    0% {
        transform: translateX(2px) rotateZ(135deg);
    }

    20%{
        transform: rotateZ(90deg);
    }

    100% {
        transform: rotateZ(45deg);
    }
`