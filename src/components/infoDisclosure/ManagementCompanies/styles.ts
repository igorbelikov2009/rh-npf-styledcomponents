import styled from "styled-components";

export const StyledManagement = styled.section`
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  display: block;
  width: 100%;
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

export const Content = styled.div`
  width: 100%;
`;

export const Paragraph = styled.p`
  display: block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 12px;
  color: #5a646e;
`;

export const Bold = styled.span`
  display: block;
  font-weight: 700;
  color: #010;
`;

export const Small = styled.span`
  display: block;
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
  font-style: normal;
  font-weight: 400;
`;
