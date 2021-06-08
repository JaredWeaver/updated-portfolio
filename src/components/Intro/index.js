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
  align-items: center;
  object-fit: contain;
  max-width: 1500px;

  /* margin: 4px; */

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    font-size: 20px;
    width: 100%;
    padding-top: 20%;
  }
`;

const TopIntroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  padding-top: 5%;
  font-size: 3em;
  padding-bottom: 0;
  align-items: center;
  /* margin: 4px; */
  @media screen and (max-width: 1200px) {
    justify-content: center;
    flex-direction: column;
    font-size: 2rem;
    margin: 0;
  }
  @media screen and (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
    font-size: 1.5rem;
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
    font-size: 1rem;
    margin: 0 auto;
  }
  @media screen and (max-width: 450px) {
    justify-content: center;
    flex-direction: column;
    font-size: 1rem;
  }
`;

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 5%;
  font-size: 3em;
  padding-bottom: 0;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 450px) {
  }
`;

const IntroPic = styled.img`
  border-radius: 5%;
  height: 50vh;
  /* margin: 5px; */
`;

const IntroBioContainer = styled.section`
  display: flex;

  width: 66.6%;
  background: transparent;
  background-size: cover;
  overflow: hidden;
  border-radius: 5%;
  p {
    font-size: 36px;
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
  @media screen and (max-width: 1200px) {

  }
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 450px) {
    width: 100%;
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
