import styled from "styled-components";

export const CardsContainer = styled.section`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-color: #ffffff;
  padding-top: 24px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 48px; //

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 96px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const CardsHeading = styled.h2`
  font-size: 18px;
  color: #28323c;
  padding: 0 24px;
  margin-bottom: 24px;
  font-weight: 500;

  @media screen and (min-width: 576px) {
    padding: 0;
    margin-bottom: 48px;
  }
`;

export const StyledCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-left: none;

  @media screen and (min-width: 576px) {
    border-left: 1px solid #e4e4e4;
  }
`;
