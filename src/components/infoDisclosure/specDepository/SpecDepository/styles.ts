import styled from "styled-components";

export const StyledSpecDepository = styled.div`
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }
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

export const Interactions = styled.div`
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;

  @media screen and (min-width: 576px) {
    padding-right: 28px;
    padding-left: 28px;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Description = styled.p`
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: #5a646e;
`;
