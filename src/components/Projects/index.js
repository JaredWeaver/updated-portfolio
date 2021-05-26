import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  width: 100%;
  padding-top: 4em;
  margin: 1em;
`;

const ProjectDiv = styled.section`
  display: flex;
  justify-content: center;
  border: 3px solid white;
  border-radius: 5%;
  margin: 1em;
  /* padding:4em; */
  height: 30em;
  background: linear-gradient(0deg, #393d47 0%, #2f0909 94%) fixed no-repeat;
  width: 45%;
  background-color: #2f0909;
`;

const Header = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 3em;
  width: 100%;
  margin: 10px;
`;

const Projects = () => {
  return (
    <div>
      <ProjectsContainer>
        <ProjectDiv>
          <Header>mentor.me</Header>
        </ProjectDiv>
        <ProjectDiv>
          <Header>Subscription Tracker</Header>
        </ProjectDiv>
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
