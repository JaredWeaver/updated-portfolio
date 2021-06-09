import React from 'react'
import styled from 'styled-components';

const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  font-size: 40px;
  text-decoration: none;
  margin-top: 15%;
  margin-left: 80px;
  margin-bottom: 10%;
    

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
