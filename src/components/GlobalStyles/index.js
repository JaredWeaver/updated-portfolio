import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    /* background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; */
    height:100%;
    background-color: #090947;
    background: linear-gradient(36deg, #090947 0% , #5a585a 94%) fixed no-repeat;

    font-family: 'Space Grotesk', sans-serif;
    /* transition: all 0.50s linear; */
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
// background-color: #090947;
// background-image: linear-gradient(315deg, #090947 0%, #5a585a 74%);

