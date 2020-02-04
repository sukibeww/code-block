import { Link } from "gatsby"
import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import styled from "styled-components"
import Disqus from "../components/comment"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import SEO from "../components/seo"

const IntroPaper = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 30px;
  margin: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  text-align: justify;
  width: 75%;
  @media (max-width: 1200px){
    width: 100%;
  }
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Back = styled.div`
  align-self: flex-start;
  margin: 5px;
`

const BackText = styled.h3`
  margin: 5px;
`

const PostTitle = styled.h1`
  text-align: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
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
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title}/> 
      <IntroContainer>
        <IntroPaper>
          <Back>
            <Link style={{color: "inherit", textDecoration: "none"}} to="/">
              <BackText><IoIosArrowBack/></BackText>
            </Link>
          </Back>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        </IntroPaper>
      </IntroContainer>
      <Pagination pageContext={pageContext}/>
      <Disqus disqusConfig={disqusConfig}/>
    </Layout>
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