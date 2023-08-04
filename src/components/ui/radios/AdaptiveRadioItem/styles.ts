import styled from "styled-components";

export const StyledAdaptiveRadioItem = styled.label<{ active: boolean }>`
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  font-size: 13px;
  line-height: 24px;
  padding: 12px 16px;
  border-radius: 24px;
  transition: color 0.3s, background 0.4s;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;

  background: ${({ active }) => (active ? "#50287d" : "#f3f5f7")};
  color: ${({ active }) => (active ? "#b5bdc8" : "#b5bdc8")};
  &:hover {
    color: ${({ active }) => (active ? "#ffffff" : "#50287d")};
  }
`;

export const Input = styled.input`
  display: none;
`;
