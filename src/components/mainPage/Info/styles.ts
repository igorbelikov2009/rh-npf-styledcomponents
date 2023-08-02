import styled from "styled-components";

export const StyledInfo = styled.div`
  width: 100%;
  max-width: 960px;
  background-color: #fff;
  margin: 0 auto;
  padding: 24px;
  padding-bottom: 72px;

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 72px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Head = styled.div`
  width: 100%;
  padding: 0;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 72px;
  }
`;

export const Heading = styled.h1`
  display: block;
  width: 100%;
  max-width: 680px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
  color: #28323c;

  @media screen and (min-width: 768px) {
    font-size: 34px;
    line-height: 48px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 860px;
  }
`;

export const Subheading = styled.p`
  display: block;
  width: 100%;
  max-width: 440px;
  font-size: 13px;
  color: #78828c;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 560px;
  }
`;

export const Images = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledImg = styled.img`
  aspect-ratio: 660 / 440;
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    max-width: calc(50% + 56px);
  }

  @media screen and (min-width: 768px) {
    max-width: calc(50% + 80px);
  }

  &:first-of-type {
    position: static;

    @media screen and (min-width: 576px) {
      position: relative;
      margin-top: 120px;
      bottom: 0;
      left: 0;
      margin-bottom: 87px;
    }

    @media screen and (min-width: 1024px) {
      margin-bottom: 112px;
    }
  }

  &:last-of-type {
    display: none;

    @media screen and (min-width: 576px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const ImgBuilding = styled.img`
  aspect-ratio: 660 / 440;
  width: 100%;
  margin-bottom: 24px;
  display: block;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

export const BlockOffers = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1300px) {
    padding: 0 100px;
  }
`;

export const Offer = styled.div`
  width: 100%;
  max-width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    max-width: 254px;
  }

  @media screen and (min-width: 768px) {
    max-width: 320px;
  }

  @media screen and (min-width: 1300px) {
    max-width: 360px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  line-height: 24px;
  color: #28323c;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 34px;
    line-height: 48px;
  }
`;

export const Subtitle = styled.p`
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 200px;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    margin-bottom: 0;
  }
`;
