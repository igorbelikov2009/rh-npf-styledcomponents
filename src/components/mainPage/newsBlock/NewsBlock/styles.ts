import styled from "styled-components";

export const Carousel = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px 72px;
  // overflow-x: scroll;
  overflow-x: hidden;

  @media screen and (min-width: 576px) {
    padding: 0 28px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 96px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 120px;
    padding-left: 240px;
    overflow-x: hidden;
  }
`;
export const ScrollableElement = styled.div`
  width: 100%;
  position: relative;
  transition: right 0.4s;
  transition-property: right;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  transition-delay: 0s;
`;
