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
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "1" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
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

export default Pagination