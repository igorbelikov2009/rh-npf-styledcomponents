import styled from "styled-components";

export const StyledColumn = styled.div<{ clear: boolean }>`
  min-width: 83.33vw;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 24px;

  transition: opacity 0.5s;
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;

  @media screen and (min-width: 576px) {
    min-width: 480px;
    padding-right: 140px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 500px;
    padding-right: 140px;
  }

  opacity: ${({ clear }) => (clear ? "1" : "0.4")};
`;

export const ColumnTitle = styled.h1`
  font-size: 34px;
  line-height: 48px;
  margin-bottom: 24px;
`;

export const Line = styled.div`
  width: 100vw;
  height: 1px;
  background: #e4e4e4;
  position: relative;
  margin-bottom: 24px;

  &::before {
    content: " ";
    position: absolute;
    left: 0;
    top: -4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #28323c;
  }
`;

export const Description = styled.p`
  display: block;
  font-size: 13px;
  line-height: 24px;
  color: #78828c;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
