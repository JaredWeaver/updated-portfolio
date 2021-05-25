import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    /* background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; */
    height:100%;
    background: linear-gradient(315deg, #a5c7b7 0% , #4a0404 74%) fixed no-repeat;

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
    background-color: #a5c7b7;
  }
  `;
// background-color: #5d4257;
// background-image: linear-gradient(315deg, #5d4257 0%, #a5c7b7 74%);
