import styled from "styled-components";

export const StyledBusinnesStatistic = styled.section`
  width: 100%;
  max-width: 1440px;
  background: #fff;
  margin: 0 auto;
  padding: 24px 24px 0;
  box-sizing: border-box;

  @media screen and (min-width: 576px) {
    padding: 72px 28px;
  }

  @media screen and (min-width: 1024px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const Heading = styled.h2`
  width: 100%;
  max-width: 960px;
  margin: 12px auto;
  color: #5a646e;
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 500;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    margin-bottom: 72px;
  }
`;

export const Subheading = styled.h2`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 48px;
  color: #28323c;
  font-weight: 500;
`;

export const Container = styled.div`
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -24px;
  margin-left: -24px;
  box-sizing: border-box;
  // margin-top: 0 auto;

  @media screen and (min-width: 576px) {
    margin: 0 auto;
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  min-height: 96px;
  border-top: 1px solid #e4e4e4;

  &:first-of-type {
    @media screen and (min-width: 576px) {
      border-left: 1px solid #e4e4e4;
    }

    @media screen and (min-width: 768px) {
      border-bottom: 1px solid #e4e4e4;
    }
  }

  &:nth-of-type(2),
  &:nth-of-type(3) {
    @media screen and (min-width: 576px) {
      border-bottom: 1px solid #e4e4e4;
    }
  }

  &:last-of-type {
    border-bottom: 1px solid #e4e4e4;

    @media screen and (min-width: 576px) {
      border-left: 1px solid #e4e4e4;
    }
  }

  @media screen and (min-width: 576px) {
    width: 33.33%;
    display: block;
    border-right: 1px solid #e4e4e4;
  }

  @media screen and (min-width: 768px) {
    width: 25%;
  }
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 24px;
  margin-bottom: 0;

  @media screen and (min-width: 576px) {
    margin-bottom: 80px;
  }
`;

export const Subtitle = styled.p`
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
`;
