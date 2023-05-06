import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'IBM Plex Sans', system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-weight: 400;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
    body {
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
