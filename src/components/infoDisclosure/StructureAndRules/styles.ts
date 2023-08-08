import styled from "styled-components";

export const StyledStructureAndRules = styled.section`
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 1160px) {
    flex-wrap: nowrap;
  }
`;

export const Column = styled.div`
  width: 100%;
  padding: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e4e4e4;
`;

export const Heading = styled.h1`
  font-size: 18px;
  line-height: 24px;
  color: #000;

  @media screen and (min-width: 576px) {
    font-size: 34px;
    line-height: 48px;
  }
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  outline: none;
  color: #50287c;
  max-width: 400px;
  margin-top: 24px;
  cursor: pointer;

  &:hover {
    color: #50287d;
  }

  @media screen and (min-width: 576px) {
    margin-top: 48px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  width: 112px;

  @media screen and (min-width: 576px) {
    margin-top: 48px;
  }
`;
