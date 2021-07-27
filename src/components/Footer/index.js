import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';


const Container = styled.div`
  flex: 1;
  width: 100%;
  border-bottom: 1px #ffdae0 solid;
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: auto;
  bottom: 0px;
  background: linear-gradient(to bottom, #2f0909 0%, #393D47 100%);
  `;

const FootSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  /* flex-wrap: wrap; */
  @media only screen and (min-width: 29.8125rem /*477px*/) {
    justify-content: center;
    width:100%;
    
  }
  @media only screen and (min-width: 77.5rem /*1240px*/) {
    justify-content: center;
  }
`;

const FootCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    list-style-type: none;
  }
`;




const FootLegalSection = styled.section`
  padding: 0 1.875rem 1.25rem;
  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    list-style-type: none;
    li {
      margin: 0.5rem;
      font-size: 0.75rem;
    }
  }
`;

const HashLink = styled(Link)`
font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <>
      <Container />
      <FooterContainer>
        <FootSection>
          <FootCol>
            
          </FootCol>
          <FootCol>
          <HashLink
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            Back To Top
            </HashLink>
          </FootCol>
          <FootCol>
            
          </FootCol>
        </FootSection>
   
        <FootLegalSection>
          <ul>
            <li>&copy; 2021 Copyright jarweav </li>
          </ul>
        </FootLegalSection>
      </FooterContainer>
    </>
  );
};

export default Footer;