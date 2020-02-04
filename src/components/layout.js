import { graphql, Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const Content = styled.div`
  min-height: 95vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  padding: 3vw;
  background: repeating-linear-gradient(199deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(78deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(277deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(18deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(91deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(348deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(334deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(261deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),repeating-linear-gradient(21deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,transparent 1px, transparent 31px,rgba(0,0,0,0.03) 31px, rgba(0,0,0,0.03) 32px,transparent 32px, transparent 92px),linear-gradient(90deg, hsl(83,0%,100%),hsl(83,0%,100%));
  @media (max-width: 1200px){
    flex-direction: column;
    align-items: center;
  }
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const PostExcerpt = styled.p`
  font-size: 0.8em;
`

const PostCount = styled.h4`
  align-self: flex-end;
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5vh 0;
  max-width: 25%;
  position: static;
  @media (max-width: 1200px){
    max-width: 100%;
    height: auto;
  }
`

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 1200px){
    max-width: 100%;
    height: auto;
  }
`

const PostPaper = styled.div`
  background-color: #FFFFFF;
  align-self: flex-end;
  max-width: 100%;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  :hover {
    transform: translate3d(5px, 5px, 0);
    box-shadow: 0 5px 5px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
`

const PaginationButton = styled.button`
  opacity: 0.5;
  background-color: white;
  align-self: flex-start;
  border: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`


const Layout = ({ children }) => {
  const pageLimit = 3; 
  const data = useStaticQuery(graphql`
    query SiteTitleQuery{
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }){
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
        }
      } 
    }
  `)

  const paginate = Math.ceil(data.allMarkdownRemark.totalCount / pageLimit) - 1 
  const [ currentPaginate, setCurrentPaginate ] = useState(0)
  const [ displayedPosts, setDisplayedPost ] = useState(data.allMarkdownRemark.edges.slice(0,pageLimit))

  useEffect(() => {
    const updatePostList = (pageLimit) => {
      const start = pageLimit * currentPaginate
      const last = pageLimit * currentPaginate + pageLimit
      setDisplayedPost(() => {
        return data.allMarkdownRemark.edges.slice(start, last)
      })
    }
    updatePostList(pageLimit)
  },
    [currentPaginate, data.allMarkdownRemark.edges],
  );

  const nextPaginate = async () => {
    setCurrentPaginate((prevState)=>{
      return prevState + 1 
    })
  }

  const prevPaginate = async () => {
    setCurrentPaginate((prevState) => {
      return prevState - 1
    })
  }

  

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <Content> 
        <StyledMain>{children}</StyledMain>
        <PostContainer>
          <PostCount>{data.allMarkdownRemark.totalCount} Posts</PostCount>
          <PostsWrapper>
            {displayedPosts.map(({ node }, index) => (
              <PostPaper key={node.id}>
                <Link to={`/blog/${data.allMarkdownRemark.totalCount - index}`} style={{color: "#373737"}}>
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span>
                      — {node.frontmatter.date}
                    </span>
                  </h3>
                  <PostExcerpt>{node.excerpt}</PostExcerpt>
                </Link>
              </PostPaper>
            ))}
          </PostsWrapper>
          <PaginationWrapper>
            {(currentPaginate < paginate) ? <PaginationButton onClick={nextPaginate}>Older post...</PaginationButton> : <p></p>}
            {(currentPaginate > 0) ? <PaginationButton onClick={prevPaginate}>Newer post...</PaginationButton> : <p></p>}
          </PaginationWrapper>
          
        </PostContainer>
      </Content>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
