import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  display: block;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    font-size: 34px;
    line-height: 48px;
  }
`;

export const Date = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #78828c;
  display: block;
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-style: normal;
  color: #5a646e;
  display: block;
  margin-top: 24px;
  margin-bottom: 24px;
`;
