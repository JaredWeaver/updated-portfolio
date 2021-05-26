import React from 'react';
import styled from 'styled-components';
import TypeWriter from 'typewriter-effect';
import FrontImage from '../../assets/kikijaredrock.jpg';
import BackImage from '../../assets/walkaway.jpg';

const TypewriteContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  padding-top: 10%;
  font-size: 3em;
  padding-bottom: 0;
  align-items: center;
  margin: 4px;
`;

const TopIntroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  padding-top: 5%;
  font-size: 3em;
  padding-bottom: 0;
  align-items: center;
  margin: 4px;
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
`;

const IntroPic = styled.img`
  border-radius: 5%;
  opacity: 0.8;
  height: 8em;
`;

const IntroBioContainer = styled.section`
  display: flex;

  width: 66.6%;
  background: transparent;
  background-size: cover;
  overflow: hidden;
  border-radius: 5%;
  p {
    font-size: 1em;
    text-align: center;
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
