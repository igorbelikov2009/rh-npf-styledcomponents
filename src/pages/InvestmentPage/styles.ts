import styled from "styled-components";

export const ContainerFirstOptionBlock = styled.div<{ firstvisible: boolean }>`
  max-width: 382px;
  border-radius: 6px;
  position: fixed;
  margin: 0 auto;
  transition: opacity 0.28s ease;
  // если сделать transition: all 0.28s ease;,
  // то этот блок будет дёргаться при скроле

  @media screen and (min-width: 576px) {
    max-width: 210px;
  }

  @media screen and (min-width: 768px) {
    max-width: 210px;
    margin: 0;
  }

  visibility: ${({ firstvisible }) => (firstvisible ? "visible" : "hidden")};
  opacity: ${({ firstvisible }) => (firstvisible ? "1" : "0")};
`;

export const ContainerSecondOptionBlock = styled.div<{ secondvisible: boolean }>`
  max-width: 382px;
  border-radius: 6px;
  position: fixed;
  margin: 0 auto;
  transition: opacity 0.28s ease;
  // если сделать transition: all 0.28s ease;,
  // то этот блок будет дёргаться при скроле

  @media screen and (min-width: 576px) {
    max-width: 210px;
  }

  @media screen and (min-width: 768px) {
    max-width: 210px;
    margin: 0;
  }

  visibility: ${({ secondvisible }) => (secondvisible ? "visible" : "hidden")};
  opacity: ${({ secondvisible }) => (secondvisible ? "1" : "0")};
`;
