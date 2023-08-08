import styled from "styled-components";

export const StyledIncome = styled.section`
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

export const Heading = styled.h2`
  color: #28323c;
  font-size: 34px;
  line-height: 48px;
  font-weight: 400;
  letter-spacing: normal;
  margin: 24px 0;
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

export const ParagraphBefore = styled.p`
  width: calc(100% - 32px);
  display: block;
  margin: 12px 0;
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 400;
  color: #5a646e;
  margin-left: 24px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #50287d;
    left: -24px;
    top: 8px;
  }
`;
