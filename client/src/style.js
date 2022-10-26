import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: ${props => props.height};
    user-select: none;
    padding-top: 80px;
    ${props=>props.isLookingCart?
    `background-color: rgba(57, 55, 72, 0.22);
    filter: brightness(.82);
    pointer-events: none;
    `:""}
    main {
        padding: 0 7%;
        padding-top: 60px;
    }
`