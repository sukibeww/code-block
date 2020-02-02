import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  background: linear-gradient(292deg, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 20%,rgba(151, 151, 151, 0.03) 20%, rgba(151, 151, 151, 0.03) 40%,rgba(215, 215, 215, 0.03) 40%, rgba(215, 215, 215, 0.03) 60%,rgba(254, 254, 254, 0.03) 60%, rgba(254, 254, 254, 0.03) 80%,rgba(112, 112, 112, 0.03) 80%, rgba(112, 112, 112, 0.03) 100%),linear-gradient(62deg, rgba(34, 34, 34, 0.03) 0%, rgba(34, 34, 34, 0.03) 20%,rgba(171, 171, 171, 0.03) 20%, rgba(171, 171, 171, 0.03) 40%,rgba(206, 206, 206, 0.03) 40%, rgba(206, 206, 206, 0.03) 60%,rgba(210, 210, 210, 0.03) 60%, rgba(210, 210, 210, 0.03) 80%,rgba(69, 69, 69, 0.03) 80%, rgba(69, 69, 69, 0.03) 100%),linear-gradient(314deg, rgba(235, 235, 235, 0.03) 0%, rgba(235, 235, 235, 0.03) 20%,rgba(254, 254, 254, 0.03) 20%, rgba(254, 254, 254, 0.03) 40%,rgba(178, 178, 178, 0.03) 40%, rgba(178, 178, 178, 0.03) 60%,rgba(211, 211, 211, 0.03) 60%, rgba(211, 211, 211, 0.03) 80%,rgba(73, 73, 73, 0.03) 80%, rgba(73, 73, 73, 0.03) 100%),linear-gradient(32deg, rgba(182, 182, 182, 0.01) 0%, rgba(182, 182, 182, 0.01) 12.5%,rgba(208, 208, 208, 0.01) 12.5%, rgba(208, 208, 208, 0.01) 25%,rgba(178, 178, 178, 0.01) 25%, rgba(178, 178, 178, 0.01) 37.5%,rgba(143, 143, 143, 0.01) 37.5%, rgba(143, 143, 143, 0.01) 50%,rgba(211, 211, 211, 0.01) 50%, rgba(211, 211, 211, 0.01) 62.5%,rgba(92, 92, 92, 0.01) 62.5%, rgba(92, 92, 92, 0.01) 75%,rgba(56, 56, 56, 0.01) 75%, rgba(56, 56, 56, 0.01) 87.5%,rgba(253, 253, 253, 0.01) 87.5%, rgba(253, 253, 253, 0.01) 100%),linear-gradient(247deg, rgba(103, 103, 103, 0.02) 0%, rgba(103, 103, 103, 0.02) 12.5%,rgba(240, 240, 240, 0.02) 12.5%, rgba(240, 240, 240, 0.02) 25%,rgba(18, 18, 18, 0.02) 25%, rgba(18, 18, 18, 0.02) 37.5%,rgba(38, 38, 38, 0.02) 37.5%, rgba(38, 38, 38, 0.02) 50%,rgba(246, 246, 246, 0.02) 50%, rgba(246, 246, 246, 0.02) 62.5%,rgba(9, 9, 9, 0.02) 62.5%, rgba(9, 9, 9, 0.02) 75%,rgba(167, 167, 167, 0.02) 75%, rgba(167, 167, 167, 0.02) 87.5%,rgba(86, 86, 86, 0.02) 87.5%, rgba(86, 86, 86, 0.02) 100%),linear-gradient(90deg, hsl(194,0%,10%),hsl(194,0%,10%));
  flex-direction: column;
  width: 100%;
  padding: 3vh;
  opacity: 0.8;
  text-align: center;
`

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  color: white;
`

const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  @media (max-width: 1200px){
    flex-direction: column-reverse;
  }
`

const FooterIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  max-width: 40vw;
  margin: 0 3vw;
  @media (max-width: 1200px){
    max-width: 95%;
  }
`

const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 40vw;
  margin: 0 3vw;
  @media (max-width: 1200px){
    flex-direction: row;
    justify-content: space-around;
    max-width: 100%;
    width: 100%;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 7px 0;
`

const Footer = ({ children }) => {
  return (
    <>
      <StyledFooter>
        <FooterContentWrapper>
          <FooterIntroWrapper>
            <h1 style={{color: "white", textDecoration: "underline", fontSize: "1.4em", margin: "5px 0"}}>About me</h1>
            <h4 style={{color: "white", margin: 0}}>I am an Indonesian developer based in Melbourne, I love coding and experiment with design. I am currently invested in React, GraphQL and testing. I created this blog to teach myself server-side rendering  and search engine optimisation process, while trying to give blogging a shot at the same time. This is the first blog that I ever created pardon my bad writing... hahahah</h4>
          </FooterIntroWrapper>
          <FooterLinksWrapper>
            <a href="https://github.com/sukibeww" style={{color: "white"}}>
              <LinkContainer>
                <FaGithub size="2.3em"/>
                <h4 style={{color: "white", margin: 0, width: "100%"}}>Github</h4>
              </LinkContainer>
            </a>
            <a href="https://www.linkedin.com/in/sukianto-suteja-85b379154/" style={{color: "white"}}>
              <LinkContainer>
                <FaLinkedin size="2.3em"/>
                <h4 style={{color: "white", margin: 0, width: "100%"}}>LinkedIn</h4>
              </LinkContainer>
            </a>
            <a href="https://twitter.com/suki_aliong" style={{color: "white"}}>
              <LinkContainer>
                <FaTwitter size="2.3em"/>
                <h4 style={{color: "white", margin: 0, width: "100%"}}>Twitter</h4>
              </LinkContainer>
            </a>
          </FooterLinksWrapper>
        </FooterContentWrapper>
        <Links>
          <h4 style={{fontSize: "1em", margin: "10px", color: "white"}}>
            © Sukianto Suteja {new Date().getFullYear()}
          </h4>
        </Links>     
      </StyledFooter>
    </>
  )
}

export default Footer
