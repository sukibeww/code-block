import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 0.8rem 30vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledContainer = styled.div`
  max-width: 960;
`

const StyledH1 = styled.h1`
  margin: 0;
`

const StyledH3 = styled.h3`
  margin: 0;
  font-size: 1em;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledContainer>
      <StyledH1>
        <Link
          to="/"
          style={{
            color: `#373737`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </StyledH1>
    </StyledContainer>
    {/* <LinkContainer>
      <StyledH3>
        <Link
          to="/"
          style={{
            color: `#373737`,
            textDecoration: `none`,
          }}
        >
          About me
        </Link>
      </StyledH3>
    </LinkContainer> */}
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
