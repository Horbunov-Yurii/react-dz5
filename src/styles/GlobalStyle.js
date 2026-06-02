import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #4c4b88ff;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  h1, h2, h3, h4, p{
    margin: 0;
  }

  a{
    text-decoration: none;
  }
`;