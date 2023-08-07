import styled from "styled-components";

export const StyledGeneralInfo = styled.section`
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 24px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  display: block;
  font-size: 18px;
  line-height: 24px;
  color: #5a646e;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 48px;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    margin-bottom: 48px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  font-style: normal;
  color: #5a646e;
  display: block;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const Span = styled.span`
  display: block;
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
  font-style: normal;
  font-weight: 400;
`;
