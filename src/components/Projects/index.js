import React from 'react';
import styled from 'styled-components';
import mentorImg from '../../assets/mentorme.png';
import subtrkr from '../../assets/subtrkr.png';
import { SiReact } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiNodeDotJs } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { SiStyledComponents } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';


const ProjectsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  width: 100%;
  padding-top: 1em;
  margin: 1em;
`;

const ProjectDiv = styled.section`
  display: flex;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 5%;
  margin: 1em;
  height: 50em;
  background: linear-gradient(0deg, #393d47 0%, #2f0909 94%) fixed no-repeat;
  width: 45%;
  background-color: #2f0909;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const Header = styled.nav`
  display: flex;
  /* margin: 10px; */
  justify-content: space-evenly;
  align-items: center;
  font-size: 2em;
  width: 100%;
  border-bottom: 1px solid white;
  a{
      text-decoration: none;
      color: white;
      font-size: 16px;
      

  }
  a:hover {
      color: gray;
  }
`;

const Screenshot = styled.img`
  display: flex;
  margin: 2em;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;
const BodyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
height: 50vh;
  width: 100%;
  border-top: 1px solid white;
  h2 {
    font-size: 1.5em;
    padding: 2em;
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
  /* padding: 2em; */
  width: 100%;
  margin-bottom: 1em;
  svg{
      font-size: 24px;
  }
`;

const Projects = () => {
  return (
    <div>
      <ProjectsContainer>
        <ProjectDiv>
          <Header>mentor.me 
          <a href={"https://github.com/freejonm/mentor.me"} target={"_blank"}rel={"noreferrer"}>Github Repo</a>
          </Header>
          <Screenshot src={mentorImg} />
          <BodyWrapper>
            <h2>
              A MERN app designed to match recent coding bootcamp graduates with
              mentors to help them transition and excel in a web developement
              career. 
            </h2>
           
          </BodyWrapper>
          <TechWrapper>
            <SiReact /> <SiMongodb /> <SiNodeDotJs /> <DiSass />{' '}
            <SiStyledComponents />
          </TechWrapper>
        </ProjectDiv>
        <ProjectDiv>
          <Header>Subscription Tracker <a href={"https://github.com/freejonm/mentor.me"} target={"_blank"}rel={"noreferrer"}>Github Repo</a></Header>
          <Screenshot src={subtrkr} />
          <BodyWrapper><h2>
          A full-stack app that enables users to add recurring subscriptions and view them all on one calendar.</h2>
          </BodyWrapper>
          <TechWrapper>
           <SiNodeDotJs /><SiTailwindcss /><SiJavascript/><SiMysql/> <SiHtml5/>
          </TechWrapper>
        </ProjectDiv>
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
