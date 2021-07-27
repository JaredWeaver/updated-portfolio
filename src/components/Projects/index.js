import React from 'react';
import styled from 'styled-components';
import mentorImg from '../../assets/mentorme.png';
import subtrkr from '../../assets/subtrkr.png';
import jaredazon from '../../assets/jaredazon.png';
import { SiReact } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiNodeDotJs } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { SiStyledComponents } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-top: 10rem;
  padding-bottom: 10rem;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 3px solid white;
  border-radius: 5%;
  z-index: 1;
  margin: 0 2rem;
  padding: 0;
  height: 40rem;

  margin-top: 20px;
  width: 70rem;
  background: linear-gradient(0deg, #393d47 0%, #2f0909 94%) fixed no-repeat;
  background-color: #2f0909;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    /* margin: 2rem auto; */
    /* width: 90%; */
    /* height:60%; */
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  height: 20rem;
  border-bottom: 1px solid white;
  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    object-fit: contain;
  }
  a:hover {
    color: gray;
  }
`;

const Screenshot = styled.img`
  display: flex;
  max-height: 800px;
  width: 100%;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  margin: 20px 0;
`;
const BodyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  max-height: 100vh;
  border-top: 1px solid white;
  padding-top: 5rem;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    height: fit-content;
    /* margin-top: 2rem; */

    font-size: 1.67rem;
    max-width: 100vw;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
`;

const TechWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  margin-bottom: 1rem;
  svg {
    object-fit: contain;
    font-size: 2rem;
  }
`;

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <ProjectDiv>
          <Header>
            Amazon Clone{' '}
            <a
              href={'https://github.com/JaredWeaver/e-commerce-clone'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Github Repo
            </a>
          </Header>
          <Screenshot src={jaredazon} />
          <BodyWrapper>
            <h2>
              An Amazon clone with login and add to cart features built with
              react hooks.
            </h2>
          </BodyWrapper>
          <TechWrapper>
            <SiNodeDotJs />
            <SiTailwindcss />
            <SiJavascript />
            <SiMysql /> <SiHtml5 />
          </TechWrapper>
        </ProjectDiv>
        <ProjectDiv id="projects">
          <Header>
            mentor.me
            <a
              href={'https://github.com/freejonm/mentor.me'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Github Repo
            </a>
          </Header>
          <Screenshot src={mentorImg} />
          <BodyWrapper>
            <h2>
              A MERN app designed to match recent coding bootcamp graduates with
              mentors.
            </h2>
          </BodyWrapper>
          <TechWrapper>
            <SiReact /> <SiMongodb /> <SiNodeDotJs /> <DiSass />{' '}
            <SiStyledComponents />
          </TechWrapper>
        </ProjectDiv>
        <ProjectDiv>
          <Header>
            Subscription Tracker{' '}
            <a
              href={'https://github.com/freejonm/mentor.me'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Github Repo
            </a>
          </Header>
          <Screenshot src={subtrkr} />
          <BodyWrapper>
            <h2>
              A full-stack app that enables users to add recurring subscriptions
              and view them all on one calendar.
            </h2>
          </BodyWrapper>
          <TechWrapper>
            <SiNodeDotJs />
            <SiTailwindcss />
            <SiJavascript />
            <SiMysql /> <SiHtml5 />
          </TechWrapper>
        </ProjectDiv>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
