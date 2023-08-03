import styled from "styled-components";

export const StyledRadioItem = styled.label<{ active: boolean }>`
  cursor: pointer;
  padding: 12px 24px;
  box-sizing: border-box;
  border-radius: 24px;
  display: flex;
  opacity: 1;
  transition: background-color 0.5s;

  background-color: ${({ active }) => (active ? "#50287d" : "#b5bdc8")};

  &:hover {
    transition: all 0.5;
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Title = styled.p`
  opacity: 0.7;
  font-size: 16px;
  color: #ffffff;
  margin: auto;
`;
