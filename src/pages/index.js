import { graphql } from "gatsby";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineBlock } from "react-icons/ai";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Illustration, Shape, Rect, Box, useRender } from "react-zdog";
import { a, useSpring } from "@react-spring/zdog";
import ArticleSkeleton from "../components/articleSkeleton";

const TAU = Math.PI * 2;
const Ring = props => {
  const { rotation } = useSpring({
    rotation: Math.PI,
  });
  const ref = useRef();
  useRender(() => {
    ref.current.rotate.x += props.speed;
    ref.current.rotate.y += props.speed;
  });
  return (
    <Shape ref={ref} stroke={0} color="#747B9E">
      <a.Anchor rotate={rotation.interpolate(r => ({ x: TAU / 18 + -r / 4 }))}>
        <Rect width={50} height={50} stroke={1} color="#A4A4A4" />
      </a.Anchor>
    </Shape>
  );
};

const Subheader = styled.h3`
  color: #373737;
  font-size: 1em;
  margin-top: 20px;
  text-align: center;
  width: 100%;
`;
const MainHeader = styled.h1`
  color: #373737;
  margin-top: 20px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroPaper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 20px;
  margin: 10px;
  width: 60%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  text-align: justify;
  @media (max-width: 1200px) {
    padding: 20px;
    margin: 0;
    width: 100%;
  }
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 100vh;
`;

export default ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <IntroContainer>
          {!data.site.siteMetadata ? 
            <ArticleSkeleton /> : 
          <IntroPaper>
            <MainHeader>
              Welcome to {data.site.siteMetadata.title} <AiOutlineBlock />{" "}
            </MainHeader>
            <div style={{ width: "300px", height: "300px" }}>
              <Illustration dragRotate={true} zoom={3}>
                <Ring speed={0.01} diameter={80} />
                <Ring speed={0.02} diameter={70} />
                <Ring speed={0.03} diameter={60} />
                <Box
                  rotate={{ y: 10, x: 10 }}
                  stroke={false}
                  width={5}
                  height={5}
                  depth={5}
                  color="#3F3F3F"
                  topFace="#5e5e5e"
                  rightFace="#494949"
                  leftFace="#636363"
                  frontFace="#9E9E9E"
                  bottomFace="#7A7A7A"
                />
              </Illustration>
            </div>
            <p>3D illustration above was made with Zdog library.</p>
            <Subheader>{data.site.siteMetadata.introduction}</Subheader>
            <Subheader>{data.site.siteMetadata.description}</Subheader>
          </IntroPaper>}
        </IntroContainer>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        introduction
      }
    }
    file(relativePath: { eq: "images/landing.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          base64
          src
          srcSet
          aspectRatio
          sizes
        }
      }
    }
  }
`;
