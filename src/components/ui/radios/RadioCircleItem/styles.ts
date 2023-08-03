import styled from "styled-components";

export const StyledRadioCircleItem = styled.label<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 17px;
  border-radius: 50%;
  opacity: 1;
  transition: background 0.4s;
  transition-property: background;
  transition-duration: 0.3s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;

  &:hover {
    opacity: 0.8;
    background: ${({ active }) => (active ? "#50287d" : "#959ba3")};
  }

  background-color: ${({ active }) => (active ? "#50287d" : "#dfe6ec")};
`;

export const Input = styled.input`
  display: none;
`;

export const Title = styled.p<{ active: boolean }>`
  opacity: 0.6;
  transition: color 0.3s;
  transition-property: color;
  transition-duration: 0.3s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;

  &:hover {
    opacity: 1;
  }

  color: ${({ active }) => (active ? "#ffffff" : "rgb(70, 66, 66)")};

  &:hover {
    color: #ffffff;
  }
`;
