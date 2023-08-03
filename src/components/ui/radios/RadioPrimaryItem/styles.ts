import styled from "styled-components";

export const StyledRadioItem = styled.label<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border-radius: 24px;
  box-sizing: border-box;
  opacity: 1;

  transition: color 0.3s, background 0.4s;
  transition-property: color, background;
  transition-duration: 0.3s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;

  @media screen and (min-width: 1160px) {
    padding: 12px 24px;
    border-radius: 24px;
  }

  &:hover {
    opacity: 0.8;
    background: ${({ active }) => (active ? "#50287d" : "#959ba3")};
  }

  background: ${({ active }) => (active ? "#50287d" : "#b5bdc8")};
`;

export const Input = styled.input`
  display: none;
`;

export const Title = styled.p`
  opacity: 0.7;
  font-size: 13px;
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;

  @media screen and (min-width: 1160px) {
    font-size: 16px;
  }
`;
