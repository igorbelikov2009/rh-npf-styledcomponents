import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  border-color: #ffffff;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px 48px;
  }

  @media screen and (min-width: 768px) {
    padding: 48px 28px 48px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 1160px) {
    padding-top: 72px;
  }
`;

export const Heading = styled.h1`
  font-size: 34px;
  line-height: 48px;
  color: #363636;
  margin-bottom: 24px;
`;
