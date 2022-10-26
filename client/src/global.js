import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body{
    height: 100%;
  }

  body {
    overflow-x: hidden;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Raleway, sans-serif;
  }
`
