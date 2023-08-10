import styled, { keyframes } from "styled-components";

export const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100px;
  margin: 0 auto;
  padding: 36px;
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #6ebeff;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: ${rotateAnimation} 1s linear infinite;
  position: relative;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid #337ab7;
    border-bottom: 4px solid transparent;
    animation: ${rotateAnimation} 0.5s linear infinite reverse;
  }
`;
