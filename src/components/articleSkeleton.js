import React from "react"
import styled, {keyframes} from 'styled-components'

const SkeletonWrapper = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-self: center;
    padding: 20px;
    margin: 10px;
    width: 75%;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    text-align: justify;
    min-height: 70vh;
    overflow: hidden;
    position: relative;
    @media (max-width: 1200px) {
        padding: 20px;
        margin: 0;
        width: 100%;
    }
`;

const SkeletonTitle = styled.div`
    margin: 10px;
    height: 40px;
    background-color: #d4d4d4;
    border-radius: 4px;
    width: 200px;
    align-self: center;
`;

const SkeletonBanner = styled.div`
    margin: 10px;
    width: 100%;
    background-color: #d4d4d4;
    height: 250px;
    border-radius: 4px;
`

const SkeletonLineIndented = styled.div`
    margin: 5px;
    height: 20px;
    background-color: #d4d4d4;
    border-radius: 4px;
    width: 80%;
    align-self: flex-end;
`

const SkeletonLine = styled.div`
    margin: 5px;
    height: 20px;
    background-color: #d4d4d4;
    border-radius: 4px;
    width: 100%;
    align-self: flex-end;
`

const SkeletonParagraphWrapper = styled.div`
    display: flex;
    margin: 10px;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const ShimmerWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: ${shimmer} 3s ease-in-out infinite;
`

const Shimmer = styled.div`
    width: 30px;
    height: 300%;
    background: rgba(255,255,255,0.2);
    transform: skew(-20deg);
    box-shadow: 0 0 30px 30px rgba(255,255,255,0.05);
`

const SkeletonParagraph = () => {
    return (
        <SkeletonParagraphWrapper>
            <SkeletonLineIndented />
            <SkeletonLine /> 
            <SkeletonLine /> 
            <SkeletonLine /> 
        </SkeletonParagraphWrapper>
    )
}

const ArticleSkeleton = () => {
  return (
    <SkeletonWrapper>
        <SkeletonTitle/>
        <SkeletonBanner />
        <SkeletonParagraph />
        <SkeletonParagraph />
        <SkeletonParagraph />
        <ShimmerWrapper>
            <Shimmer />
        </ShimmerWrapper>
    </SkeletonWrapper>
  )
}

export default ArticleSkeleton
