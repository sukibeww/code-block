import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const PostPaper = styled.div`
  background-color: #FFFFFF;
  align-self: flex-end;
  max-width: 100%;
  padding: 20px;
  transform: translate3d(10px, 10px, 0);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostPaper>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostPaper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`