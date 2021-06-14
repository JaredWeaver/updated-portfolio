import React from 'react'
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* width: 100%; */
  font-size: 40px;
  text-decoration: none;
  margin: 0 auto;
    

  `;
  

const ContactInfo = () => {
    return (
        <div>
            <ContactContainer >
           
           <a id="contact" className={'email'}href={"mailto:jared.weaver2@gmail.com"} target={"_blank"} rel={"noreferrer"}>jared.weaver2@gmail.com</a>
           

           
            </ContactContainer>
        </div>
    )
}

export default ContactInfo
