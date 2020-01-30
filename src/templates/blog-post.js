import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Disqus from "../components/comment"
import Footer from "../components/footer"
import Layout from "../components/layout"

const IntroPaper = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 20px;
  margin: 10px;
  transform: translate3d(10px, 10px, 0) skew(1deg, 1deg);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  text-align: justify;
  width: 75%;
  @media (max-width: 425px){
    transform: skew(0deg, 0deg);
    padding: 20px;
    margin: 0;
    width: 100%;
  }
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Back = styled.div`
  background-color: #5F3AFF;
  color: white;
  align-self: flex-start;
  margin: 5px;
  background-position: center;
  /* transition: background 0.3s; */
  :hover{
    background: #6c4bfc radial-gradient(circle, transparent 1%, #6c4bfc 1%) center/15000%;
  }
`

const BackText = styled.h3`
  margin: 5px;
  color: white;
`



export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const slug = pageContext.slug
  const disqusConfig = {
    shortname: "suki-blog-1",
    config: { identifier: slug, title },
  }
  return (
    <>
      <Layout>
        <IntroContainer>
          <IntroPaper>
            <Back>
              <Link style={{color: "inherit", textDecoration: "none"}} to="/">
                <BackText>Back</BackText>
              </Link>
            </Back>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </IntroPaper>
        </IntroContainer>
        <Disqus disqusConfig={disqusConfig}/>
      </Layout>
      <Footer/>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`