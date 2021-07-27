import React from 'react';
import styled from 'styled-components';
import TypeWriter from 'typewriter-effect';
import FrontImage from '../../assets/kikijaredrock.jpg';
import BackImage from '../../assets/walkaway.jpg';

const TypewriteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 10%;
  font-size: 4rem;
  padding-bottom: 0;
  margin: 0 auto;
  width: 100vw;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    font-size: 20px;
    padding-top: 20%;
    
  }

`;

const TopIntroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-top: 5%;
  font-size: 74px;
  padding-bottom: 0;
  align-items: center;
  margin: 0 auto;
  max-width: 95vw;
  @media screen and (max-width: 1200px) {
    justify-content: center;
    flex-direction: column;
    font-size: 3rem;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const IntroPic = styled.img`
  border-radius: 2%;
  height: 100%auto;
  margin: 0 auto;
  object-fit: contain;
  max-width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const IntroBioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85vw;
  background: transparent;
  height: 100%;
  border-radius: 5%;
  margin: 20px auto;
  padding: 20px;
  
  p {
    font-size: 2rem;
    text-align: center;
    }
  
`;

const Intro = () => {
  return (
    <>
      <TypewriteContainer id='top'>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<strong>Hi, I'm Jared Weaver.</strong>"
              )
              .start();
          }}
        />
      </TypewriteContainer>

      <TopIntroContainer>
        <IntroPic src={FrontImage}></IntroPic>
        <IntroBioContainer>
          <p>
            I am a Software Developer that is addicted to
            learning best practices and new technologies to craft innovative
            user experiences. Seeking a full time opportunity to integrate my 10+ years worth of professional management experience into a technical role.
          </p>
        </IntroBioContainer>

        <IntroPic src={BackImage}></IntroPic>
      </TopIntroContainer>

    </>
  );
};

export default Intro;
