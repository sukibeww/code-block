import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #a3a3a3;
  flex-direction: column;
  width: 100%;
  padding: 3vh;
  opacity: 0.8;
  text-align: center;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: white;
`


const Footer = ({ children }) => {
  return (
    <>
      <StyledFooter>
        <Links>
        </Links>
        <Links>
          <span>
            © Sukianto Suteja {new Date().getFullYear()}
          </span>
        </Links>     
      </StyledFooter>
    </>
  )
}

export default Footer
