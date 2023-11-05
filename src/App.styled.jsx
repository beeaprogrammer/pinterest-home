import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *:after{
    margin: 0;
    padding: 0;
    border: none;

    box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -ms-box-sizing: border-box !important;

  }
`;
