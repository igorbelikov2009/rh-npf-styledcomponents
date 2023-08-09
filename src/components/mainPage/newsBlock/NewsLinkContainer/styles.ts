import styled from "styled-components";

export const Container = styled.div<{ clear: boolean }>`
  min-width: 83.33vw;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 24px;

  opacity: ${({ clear }) => (clear ? "1" : "0.4")};

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
`;
