import { graphql } from "gatsby"
import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Subheader = styled.h3`
  color: #373737;
  font-size: 1em;
  margin-top: 20px;
  text-align: center;
  width: 100%;
`
const MainHeader = styled.h1`
  color: #373737;
  margin-top: 20px;
  text-align: center;
  width: 100%;
`


const IntroPaper = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 20px;
  margin: 10px;
  width: 60%;
  transform: translate3d(10px, 10px, 0) skew(1deg, 1deg);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export default ({data}) => {
  console.log(data)
  return(
  <Layout>
    <SEO title="Home" />
    <IntroContainer>
      <IntroPaper>
        <MainHeader>Suki's Blog</MainHeader>
        <Subheader>{data.site.siteMetadata.introduction}</Subheader>
        <Subheader>{data.site.siteMetadata.description}</Subheader>
      </IntroPaper>
    </IntroContainer>
  </Layout>
  )
  
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        introduction
      }
    }
  }
`
