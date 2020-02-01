import { Link } from "gatsby";
import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-top: 5vh;
  align-self: center;
`

const PaginationOption = styled.h4`
  margin: 0;
`

const Pagination = (props) => {
  const { currentPage, numPages } = props.pageContext
  const index = Number(currentPage.split("/")[1])
  const isFirst = index === 1
  const isLast = index === numPages
  const prevPage = index - 1 === 1 ? "1" : (index - 1).toString()
  const nextPage = (index + 1).toString()
  return (
    <>
      <PaginationContainer>
        {!isFirst ? (
          <Link to={`/blog/${prevPage}`} rel="prev">
            <PaginationOption>← Previous Post</PaginationOption>
          </Link>
        ): <p></p>}
        {!isLast ? (
          <Link to={`/blog/${nextPage}`} rel="next">
            <PaginationOption>Next Post →</PaginationOption>
          </Link>
        ): <p></p>}
      </PaginationContainer>
    </>
  )
}

// export const pageQuery = graphql`
//   query blogPageQuery($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           excerpt
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY")
//             title
//           }
//         }
//       }
//     }
//   }
// `;

export default Pagination