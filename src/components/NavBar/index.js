import React from 'react';
import styled from 'styled-components';
import Resume from '../../assets/JaredWeaverResume.pdf'
import { SiLinkedin,SiGithub } from 'react-icons/si';


const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: transparent;
  background-color: #383e42;
  top:0px;
  opacity: .97;
  width: 100%;
  position: fixed;
  padding: 10px;
  @media screen and (max-width: 1200px) {
    width: 100%;

  }
  @media screen and (max-width: 800px) {
    width: auto;
    

  }
  @media screen and (max-width: 600px) {
width: auto;

  }
  @media screen and (max-width: 450px) {
    width: auto;
  }
`;

const NavListGroup = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  
`;

const NavListItem = styled.li`
display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  flex: auto;
  a{
    text-decoration: none;
    color: white;
  }
`;

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <NavListGroup>
          <NavListItem>Projects</NavListItem>
          <NavListItem>Contact</NavListItem>
          <NavListItem><a href={Resume} target='blank'>Resume</a></NavListItem>
          <NavListItem><a href={'https://github.com/JaredWeaver'} target='blank'><SiGithub /></a></NavListItem>
          <NavListItem><a href={'https://www.linkedin.com/in/jaredweaver2/'} target='blank'><SiLinkedin/></a></NavListItem>
        </NavListGroup>
      </NavContainer>
    </>
  );
};

export default NavBar;
