import styled from "styled-components";

export const StyledInputSubmit = styled.input`
  cursor: pointer;

  width: 100%;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  color: white;
  font-weight: 400;
  background-color: #50287d;
  border-radius: 24px;
  text-align: center;
  box-sizing: border-box;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }

  &[disabled] {
    background-color: #d2dce6;
  }
`;
