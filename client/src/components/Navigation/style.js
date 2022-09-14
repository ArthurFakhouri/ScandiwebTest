import styled from "styled-components";

export const Nav = styled.nav`

    ul{
        display: flex;
        list-style: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 19.2px;
    }

    ul li:nth-child(${props => props.selectedIndex + 1}) {
        color: #5ECE7B;
        font-weight: 600;
        border-bottom: solid 2px #5ECE7B;
    }
    
    ul li{
        padding: 30px 15px;
        cursor: pointer;
        transition: .3s color;
        z-index: 1;
    }
`