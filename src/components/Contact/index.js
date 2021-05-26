import React from 'react'
import styled from 'styled-components';

const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  width: 100%;
  padding-top: 6em;
  margin: 1em;
  text-decoration: none;
    

  `;
  

const ContactInfo = () => {
    return (
        <div>
            <ContactContainer>
           
           <a className={'email'}href={"mailto:jared.weaver2@gmail.com"} target={"_blank"} rel={"noreferrer"}>jared.weaver2@gmail.com</a>
           

           
            </ContactContainer>
        </div>
    )
}

export default ContactInfo
