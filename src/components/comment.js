import { DiscussionEmbed } from "disqus-react"
import React from "react"
import styled from 'styled-components'

const CommentWrapper = styled.div`
  margin: 8vh 5vw;
  margin-bottom: 0;
  height: auto;
`

export default (props) => {
  return (
    <CommentWrapper>
      <DiscussionEmbed shortname={process.env.GATSBY_DISQUS_NAME} config={props.disqusConfig} />
    </CommentWrapper>
  )
}
