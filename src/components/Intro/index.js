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
  width: 66.6%;
  background:transparent;
  background-size: cover;
  overflow: hidden;
  border-radius: 5%;
  p{
    font-size: 1em;
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
          <p> Developer that is addicted to learning best practices and new technologies to craft innovative user experiences.</p>
        </IntroBioContainer>
      </IntroContainer>
    </>
  );
};

export default Intro;
