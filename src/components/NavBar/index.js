import React from 'react';
import styled from 'styled-components';
import Resume from '../../assets/JaredWeaverResume.pdf'
import { SiLinkedin,SiGithub } from 'react-icons/si';
import { Link, animateScroll as scroll } from "react-scroll";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: transparent;
  background-color: #383e42;
  top:0;
  left: 0;
  right: 0;
  opacity: .97;
  width: 100%;
  position: fixed;
  padding: 8px;
  @media screen and (max-width: 1200px) {
    /* width: 100%; */
    /* padding: 8px; */
  }
  @media screen and (max-width: 800px) {
    /* width: 100%; */
    /* padding: 6px; */

  }
  @media screen and (max-width: 600px) {
/* width: 100%; */
/* padding: 4px; */

  }
  @media screen and (max-width: 450px) {
    /* width: 100%; */
    /* padding: 5px; */
    /* margin: 0; */
  }
`;

const NavListGroup = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
padding: 7px;
  /* flex: auto; */
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
          <NavListItem><Link
    activeClass="active"
    to="projects"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Projects</Link></NavListItem>
          <NavListItem><Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Contact</Link></NavListItem>
          <NavListItem><a href={Resume} target='blank'>Resume</a></NavListItem>
          <NavListItem><a href={'https://github.com/JaredWeaver'} target='blank'><SiGithub /></a></NavListItem>
          <NavListItem><a href={'https://www.linkedin.com/in/jaredweaver2/'} target='blank'><SiLinkedin/></a></NavListItem>
        </NavListGroup>
      </NavContainer>
    </>
  );
};

export default NavBar;
