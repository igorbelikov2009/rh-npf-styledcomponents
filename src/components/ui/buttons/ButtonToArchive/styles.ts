import styled from "styled-components";

export const StyledButtonToArchive = styled.button`
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #50287d;
  background-color: #fff;
  border: 2px solid #50287d;
  border-radius: 24px;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 1;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), opacity 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);

  &:hover {
    background-color: #50287d;
    color: white;
    opacity: 0.8;
    transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), opacity 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
  }
`;
