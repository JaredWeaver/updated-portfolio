import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: transparent;
  width: 100%;
  position: fixed;
  padding: 10px;
`;

const NavListGroup = styled.ul`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1.3em;
`;

const NavListItem = styled.li`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  flex: auto;
`;

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <NavListGroup>
          <NavListItem>Projects</NavListItem>
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
