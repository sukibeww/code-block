import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Content = styled.div`
  padding: 1.45rem 20vw;
  min-height: 95vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Content> 
        <StyledMain>{children}</StyledMain>
      </Content>
      <StyledFooter>
        © {new Date().getFullYear()}, Built with - 
        {`  `}
        <a style={{textDecoration: "none", color: "#542C85"}} href="https://www.gatsbyjs.org"> - Gatsby</a>
      </StyledFooter>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
