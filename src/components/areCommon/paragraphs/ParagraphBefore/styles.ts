import styled from "styled-components";

export const StyledParagraphBefore = styled.p`
  margin: 12px 0;
  color: #5a646e;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  vertical-align: baseline;
  box-sizing: border-box;
  position: relative;
  margin-left: 32px;

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
