import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Header from "./header"

const Content = styled.div`
  padding: 1.45rem 30vw;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content> 
        <div
          style={{
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a style={{textDecoration: "none", color: "#542C85"}} href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
