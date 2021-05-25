import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    height:100%;
    background-color: #090947;
    background: linear-gradient(0deg, #2f0909 0% , #393D47 94%) fixed no-repeat;
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
    padding: 0;
    color: white;
    text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
  -1px 1px 0 #000,
    1px 1px 0 #000;
    
  }
  `;


