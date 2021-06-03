import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    height:100%;
    background-color: #090947;
    background: linear-gradient(0deg, #2f0909 0% , #393D47 94%) fixed no-repeat;
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
    padding: 0px 20px;
    color: white;
    text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
    @media screen and (max-width: 1200px) {
}
@media screen and (max-width: 800px) {
  padding: 0;
  margin-left: 0;

}
@media screen and (max-width: 600px) {
  padding: 0;
  margin-left: 0;


}
@media screen and (max-width: 450px) {
  padding: 0;
  margin-left: 0;

  
}
    
  }

  .Typewriter {
    display: flex;
    justify-content: center;
    padding:4px;
    text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }

  .email{
    
      text-decoration: none;
      font-size: 50px;
      color:white;
  

  }
  `;
