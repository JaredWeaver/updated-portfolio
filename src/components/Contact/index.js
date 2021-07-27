import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  width: 100%;
  text-decoration: none;
  margin: 0 auto;
  padding-bottom: 10rem;

  text-align: center;
`;

const ContactInfo = () => {
  return (
    <ContactContainer>
      <a
        id="contact"
        className={'email'}
        href={'mailto:jared.weaver2@gmail.com'}
        target={'_blank'}
        rel={'noreferrer'}
      >
        jared.weaver2@gmail.com
      </a>
    </ContactContainer>
  );
};

export default ContactInfo;
