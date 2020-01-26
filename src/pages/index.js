import { graphql, Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Subheader = styled.h3`
  color: #373737;
  max-width: 600px;
  font-size: 1em;
`
export default ({data}) => {
  console.log(data)
  return(
  <Layout>
    <SEO title="Home" />
    
    <Subheader>{data.site.siteMetadata.description}</Subheader>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link to={node.fields.slug} style={{color: "#373737"}}>
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}{" "}
            <span>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      </Link>
    ))}
  </Layout>
  )
  
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter{
            date(formatString: "DD MMMM, YYYY")
            title
          }
          fields{
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
