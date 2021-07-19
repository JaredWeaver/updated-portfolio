import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding:0;
}

  body {
    min-height: 100vh;
    background-color: #090947;
    background: linear-gradient(0deg, #2f0909 0% , #393D47 94%) fixed no-repeat;
    font-family: 'Space Grotesk', sans-serif;
    margin: 0 auto;
    padding: 0;
    color: white;
    text-align: center;
    text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

  .Typewriter {
    display: flex;
    justify-content: center;
    flex-flow:row wrap;
    align-items: center;
    padding: 2px;
    width: 100%;
    margin: 0 auto;
    text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }
  .email{
    
      text-decoration: none;
      font-size: 40px;
      color: white;
    @media screen and (max-width: 450px) {
       font-size: 30px;
       text-align: center;
      }
    }

    `;
