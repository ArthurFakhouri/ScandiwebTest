import styled from "styled-components";

export const Main = styled.div`
    width: 100vw;
    height: ${props => props.height};
    user-select: none;
    padding-top: 80px;
    display: flex;
    justify-content: center;
    ${props => props.isLookingCart ?
        `background-color: rgba(57, 55, 72, 0.22);
    filter: brightness(.82);
    pointer-events: none;
    `: ""}

    main {
        width: 1440px;
        padding: 0 101px;
        padding-top: 80px;
    }
`