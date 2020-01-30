import { DiscussionEmbed } from "disqus-react"
import React from "react"
import styled from 'styled-components'

const CommentWrapper = styled.div`
  margin: 8vh 5vw;
  margin-bottom: 0;
`

export default (props) => {
  return (
    <CommentWrapper>
      <DiscussionEmbed shortname="suki-blog-1" config={props.disqusConfig} />
    </CommentWrapper>
  )
}
