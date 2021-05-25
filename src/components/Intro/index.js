import React from 'react';
import styled from 'styled-components';
import TypeWriter from 'typewriter-effect';

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 16%;
  font-size: 3.5em;
  padding-bottom: 0;
  align-items: center;
  text-align: center;
`;

const Intro = () => {
  return (
    <>
      <IntroContainer>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter.typeString("<strong>const jaredWeaver = 'Web Developer';</strong>").start();
          }}
        />
      </IntroContainer>
    </>
  );
};

export default Intro;
