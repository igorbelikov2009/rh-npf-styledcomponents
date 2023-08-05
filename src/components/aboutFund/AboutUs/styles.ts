import styled from "styled-components";

export const StyledAboutUs = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  background-color: #fff;
  padding: 24px 24px 48px;

  @media screen and (min-width: 768px) {
    padding: 48px 28px 72px;
  }

  @media screen and (min-width: 1024px) {
    padding-right: 0;
    padding-left: 0;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 72px;
  }
`;

export const Description = styled.p`
  color: #78828c;
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:first-of-type {
    margin-bottom: 24px;
  }
`;
