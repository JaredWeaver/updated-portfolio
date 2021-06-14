import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding:0;
}

  body {
    height:100%;
    background-color: #090947;
    background: linear-gradient(0deg, #2f0909 0% , #393D47 94%) fixed no-repeat;
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
    padding: 0 20px;
    color: white;
    text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
    @media screen and (max-width: 1200px) {
}
@media screen and (max-width: 800px) {

}
@media screen and (max-width: 600px) {

}
@media screen and (max-width: 450px) {
  display: flex;
  justify-content: center;
  flex: column;
  margin: 0 auto;
  /* width: 100%; */
  padding: 0 20px;
  margin-bottom: -150px;
}
    
  }

  .Typewriter {
    display: flex;
    justify-content: center;
    padding: 2px;
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
      }
    }

    `;