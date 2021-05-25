import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const ToggleBtn = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div>
      <ToggleBtn theme={theme} toggleTheme={theme}>Switch Theme</ToggleBtn>
    </div>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
