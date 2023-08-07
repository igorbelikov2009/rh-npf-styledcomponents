import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 24px 0 48px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;
  margin: 12px 0;
`;

export const ParagraphBold = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #010;
  margin: 12px 0;
`;

export const Heading = styled.p`
  color: #28323c;
  font-size: 18px;
  line-height: 1.5rem;
  font-weight: 400;
  letter-spacing: normal;
  margin: 24px 0;
`;
