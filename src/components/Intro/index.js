import React from 'react';
import styled from 'styled-components';
import TypeWriter from 'typewriter-effect';
// import Image from '../../assets/KikiJared.jpg';

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 16%;
  font-size: 3em;
  padding-bottom: 0;
  align-items: center;
  text-align: center;
`;

const IntroBioContainer = styled.section`
  display: flex;
  margin-top: 1em;
  width: 50%;
  background:transparent;
  background-size: cover;
  overflow: hidden;
  border-radius: 5%;
  p{
    font-size: 22px;
  }
`;

const Intro = () => {
  return (
    <>
      <IntroContainer>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<strong>const jaredWeaver = 'Web Developer';</strong>"
              )
              .start();
          }}
        />
        <IntroBioContainer>
          <p> Before switching careers into web development, I was an acclaimed Operations Manager for five years with a proven track record managing some of the biggest events in downtown Raleigh, North Carolina. Now I am a developer with that is addicted to learning best practices and new technologies to develop innovative user experiences.</p>
        </IntroBioContainer>
      </IntroContainer>
    </>
  );
};

export default Intro;
