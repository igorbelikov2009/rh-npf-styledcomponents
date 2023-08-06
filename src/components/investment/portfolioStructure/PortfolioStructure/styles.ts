import styled from "styled-components";

export const StyledPortfolioStructure = styled.section`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-color: #ffffff;
  padding: 24px 24px 0;

  @media screen and (min-width: 576px) {
    padding: 24px 28px 0;
  }

  @media screen and (min-width: 768px) {
    padding: 48px 28px 0;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Heading = styled.h1`
  font-size: 18px;
  line-height: 24px;
  color: #28323c;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 48px;
  }
`;

export const SelectorContainer = styled.div`
  max-width: 382px;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    max-width: 210px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
