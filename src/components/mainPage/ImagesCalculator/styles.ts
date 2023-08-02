import styled from "styled-components";

export const StyledImages = styled.section`
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 48px;

  @media screen and (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 120px;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (min-width: 576px) {
    padding: 0 28px;
  }

  @media screen and (min-width: 1216px) {
    padding: 0;
  }
`;

export const ImagesBlock = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledImg = styled.img`
  aspect-ratio: 660 / 440;
  width: 100%;
  margin-bottom: 11px;

  @media screen and (min-width: 576px) {
    max-width: calc(50% + 56px);
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    max-width: calc(50% + 80px);
  }

  &:nth-of-type(1) {
    position: static;
    z-index: 3;

    @media screen and (min-width: 576px) {
      margin-top: 120px;
      bottom: 0;
      left: 0;
    }
  }

  &:nth-of-type(2) {
    position: absolute;
    z-index: 3;

    @media screen and (min-width: 576px) {
      position: absolute;
      margin-top: 120px;
      bottom: 0;
      left: 0;
    }
  }

  &:nth-of-type(3) {
    position: static;
    z-index: 1;
    margin-bottom: 35px;

    @media screen and (min-width: 576px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const Attention = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (min-width: 576px) {
    max-width: calc(50% - 60px);
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media screen and (min-width: 768px) {
    max-width: calc(50% - 92px);
  }
`;

export const IconAttention = styled.img`
  position: absolute;
  top: 2px;
  left: 0px;
`;

export const ParagraphDescription = styled.p`
  display: block;
  font-size: 13px;
  color: #78828c;
  margin-left: 36px;
`;
