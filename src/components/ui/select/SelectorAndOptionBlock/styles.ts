import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Options = styled.div<{ visible: boolean }>`
  width: calc(100% - 12px);
  position: absolute;
  left: 6px;
  top: 94px;
  transition: all 0.28s;

  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transform: ${({ visible }) => (visible ? "scale(1)" : "scale(0.1)")};
`;
