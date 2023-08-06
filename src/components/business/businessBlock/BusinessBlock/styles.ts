/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";

export const StyledBusinessBlock = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 24px;
  padding-bottom: 48px;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 48px;
    padding-right: 0;
    padding-left: 0;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 48px 0;
  overflow: hidden;
  // исправить на overflow: hidden;
  // overflow-x: scroll;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const ScrollableElement = styled.div`
  transition: all 600ms ease;
  position: relative;
`;

export const ContainerChangingTitles = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;
