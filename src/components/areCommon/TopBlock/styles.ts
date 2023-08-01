import styled from "styled-components";

export const StyledTopBlock = styled.section`
  width: 100%;
  position: relative;
  top: 0;
  margin: 0 auto;
  height: 360px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;

  // background-image: url("../../public/images/main/mainTop.jpg");

  @media screen and (min-width: 576px) {
    height: 552px;
    padding: 0px 28px 48px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 240px;
    padding-right: 240px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  font-size: 26px;
  line-height: 36px;
  color: #ffffff;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 55px;
    line-height: 74px;
    margin-bottom: 24px;
  }
`;

export const HeadingSpan = styled.span`
  display: block;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
`;

export const Subheading = styled.h2`
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
  max-width: 660px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const SubheadingSpan = styled.span`
  display: block;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
`;
