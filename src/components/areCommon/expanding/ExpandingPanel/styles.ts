import styled from "styled-components";

export const StyledExpandingPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 32px;
  position: relative;
  cursor: pointer;
`;

export const PanelTitle = styled.h2`
  vertical-align: baseline;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #50287d;

  &:hover {
    color: #000;
  }
`;

export const IconContainer = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  top: 0;
  right: 0;
  margin-left: 12px;
  flex: none;
`;

export const IconPlus = styled.div<{ visible: boolean }>`
  cursor: pointer;
  opacity: 1;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 500ms;

  opacity: ${({ visible }) => (visible ? "0" : "1")};
  transform: ${({ visible }) => (visible ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const MinusPlus = styled.div<{ visible: boolean }>`
  cursor: pointer;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 500ms;

  transform: ${({ visible }) => (visible ? "rotate(180deg)" : "rotate(0deg)")};
`;

export interface ExpandingPanelProps {
  visible: boolean;
  panelName: string;
  onClickExpanding: () => void;
}
