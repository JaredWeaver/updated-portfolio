import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    height:100%;
    background-color: #090947;
    background: linear-gradient(0deg, #2f0909 0% , #393D47 94%) fixed no-repeat;
    font-family: 'Space Grotesk', sans-serif;
    margin: 0 auto;
    padding: 0px 10px;
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
      color:white;
      
  }
      `;
