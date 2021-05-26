import React from 'react';
import styled from 'styled-components';
import mentorImg from '../../assets/mentorme.png'
import subtrkr from '../../assets/subtrkr.png'

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
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const Header = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 3em;
  width: 100%;
  border-bottom:1px solid white;

`;

const Screenshot = styled.img`
display: flex;
margin: 2em;
justify-content: center;
align-items: center;
object-fit:contain;
`
const BodyWrapper =styled.div`
display: flex;
justify-content: flex-start;

width: 100%;
border-top:1px solid white;

`;

const Projects = () => {
  return (
    <div>
      <ProjectsContainer>
        <ProjectDiv>
          <Header>mentor.me</Header>
          <Screenshot src={mentorImg} />
        <BodyWrapper>

        </BodyWrapper>
        </ProjectDiv>
        <ProjectDiv>
          <Header>Subscription Tracker</Header>
          <Screenshot src={subtrkr} />
          <BodyWrapper>

        </BodyWrapper>
        </ProjectDiv>
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
