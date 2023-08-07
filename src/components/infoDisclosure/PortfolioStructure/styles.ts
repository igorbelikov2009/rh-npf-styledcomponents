import styled from "styled-components";

export const StyledPortfolioStructure = styled.section`
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

export const Paragraph = styled.p`
  width: 100%;
  display: block;
  margin: 12px 0;
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 400;
  color: #5a646e;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const StructureLink = styled.a`
  outline: none;
  text-decoration: none;
  cursor: pointer;
  color: #55347c;

  &:hover {
    text-decoration: underline;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  display: inline;
  margin-right: 24px;
  margin-bottom: 0;

  color: #50287d;
  &:hover {
    // color: #8967b1;
    color: black;
  }

  transition: color 0.22s;
  transition-duration: 0.22s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: color;

  @media screen and (min-width: 944px) {
    white-space: normal;
    display: block;
    margin-right: 0;
    margin-bottom: 24px;
  }
`;
