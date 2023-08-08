import styled from "styled-components";

export const StyledReporting = styled.section`
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

export const FlexContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 576px) {
    margin-bottom: 48px;
    flex-wrap: nowrap;
  }
`;

export const SelectorContainer = styled.div`
  width: 100%;
  position: relative;
  display: block;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

export const RadioContainer = styled.div`
  position: relative;
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
  }
`;

export const ButtonContainer = styled.div`
  width: 96px;
  margin-left: 0;

  @media screen and (min-width: 576px) {
    margin-left: 24px;
    margin-top: 0;
  }
`;
