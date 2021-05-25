import React from 'react';
import styled from 'styled-components';


const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  background: transparent;
  width: 100%;
  position: fixed;
  padding: 10px;
  
`;
const NavHeader = styled.p`
font-size: 2rem;
margin: 0;
  padding: 0;
`;

const NavListGroup = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 1.5em;
`;

const NavListItem = styled.li`
  cursor: pointer;
  padding: 0.5rem;
  flex: auto;
  text-align: center;
`;

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <NavHeader>Jared Weaver
        </NavHeader>
        <NavListGroup>
          <NavListItem>Projects</NavListItem>
          <NavListItem>Bio</NavListItem>
          <NavListItem>Contact</NavListItem>
          <NavListItem>Resume</NavListItem>
          <NavListItem>Github</NavListItem>
          <NavListItem>LinkedIn</NavListItem>
        </NavListGroup>
      </NavContainer>
    </>
  );
};

export default NavBar;
