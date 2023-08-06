import styled from "styled-components";

export const StyledBusinessProgramm = styled.section`
  width: 100%;
  background-color: #f3f5f7;
  margin: 0 auto;
  padding: 72px 24px 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px 24px;
  }

  @media screen and (min-width: 1024px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 48px;
`;

export const Heading = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: #28323c;

  @media screen and (min-width: 576px) {
    font-size: 34px;
    line-height: 48px;
  }
`;

export const ProgrammBlock = styled.div`
  width: 100%;
  display: block;

  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Cards = styled.div`
  width: 100%;
  margin-bottom: 48px;

  @media screen and (min-width: 576px) {
    width: calc(50% - 24px);
    margin-left: 12px;
    margin-right: 12px;
  }
`;

export const TopBlock = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;

  @media screen and (min-width: 576px) {
    margin-right: 24px;
  }
`;

export const CardHeading = styled.h2`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #28323c;
`;

export const TitlesContainer = styled.div`
  margin-left: 0;

  @media screen and (min-width: 576px) {
    margin-left: 40px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #5a646e;
  position: relative;
  padding-left: 24px;
  margin-top: 8px;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    line-height: 24px;
    background-color: #50287d;
    position: absolute;
    top: 10px;
    left: 9px;
  }
`;
