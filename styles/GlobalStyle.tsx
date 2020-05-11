import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing:border-box;
    }
    body{
        background-color: #E6DDE3;
        line-height: 1.85rem;
    }
`;

export default GlobalStyle;
