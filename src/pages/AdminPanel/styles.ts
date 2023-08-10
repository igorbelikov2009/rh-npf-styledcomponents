import styled from "styled-components";

export const StyledAdminPanel = styled.div`
  width: 100%;
  padding: 24px;
  margin-top: 72px;
  margin-bottom: 48px;
  background-color: #fff;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 72px;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
`;
export const GUIContainer = styled.div`
  margin-bottom: 12px;
`;
export const Heading = styled.h1`
  display: block;
  width: 100%;
  max-width: 680px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
  color: #28323c;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 34px;
    line-height: 48px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 860px;
  }
`;

export const Paragraph = styled.h4`
  display: block;
  width: 100%;
  margin-bottom: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #727476;
`;
