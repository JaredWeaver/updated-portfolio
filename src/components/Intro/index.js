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
  font-size: 3em;
  padding-bottom: 0;
  margin: 0 auto;
  width: 100vw;
  /* object-fit: contain; */
  /* max-width: 1500px; */

  /* margin: 4px; */

  /* @media screen and (max-width: 1200px) {
  } */
  @media screen and (max-width: 800px) {
    flex-direction: column;
    font-size: 20px;
    /* width: 100%; */
    padding-top: 20%;
  }
  /* @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    */
    

  /* } */
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
  max-width:95vw;
  @media screen and (max-width: 1200px) {
    justify-content: center;
    font-size: 40px;
    margin: 0 auto;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;

    font-size: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 10px 50px;
  }
`;

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 5%;
  font-size: 60px;
  padding-bottom: 0;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  }
`;

const IntroPic = styled.img`
  border-radius: 5%;
  height: 50vh;
  margin: 0 auto;
  width: auto;
  /* margin: 5px; */
`;

const IntroBioContainer = styled.div`
  display: flex;
  justify-content: center;


  width: 100vw;
  background: transparent;
  border-radius: 5%;
  margin: 20px auto;
  p {
    font-size: 40px;
    text-align: center;
    @media screen and (max-width: 1200px) {
      font-size: 32px;
    }
    @media screen and (max-width: 800px) {
      font-size: 30px;
    }
    @media screen and (max-width: 600px) {
      font-size: 30px;
    }
    @media screen and (max-width: 450px) {
      font-size: 24px;
    }
  }
`;

const Intro = () => {
  return (
    <>
      <TypewriteContainer>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<strong>const jaredWeaver = 'Web Developer';</strong>"
              )
              .start();
          }}
        />
      </TypewriteContainer>

      <TopIntroContainer>
        <IntroPic src={FrontImage}></IntroPic>
        <IntroBioContainer>
          <p>
            Seasoned Operations Manager turned Web Developer that is addicted to
            learning best practices and new technologies to craft innovative
            user experiences.
          </p>
        </IntroBioContainer>

        <IntroPic src={BackImage}></IntroPic>
      </TopIntroContainer>

      <IntroContainer></IntroContainer>
    </>
  );
};

export default Intro;
