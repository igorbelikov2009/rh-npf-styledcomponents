import styled from "styled-components";

export const StyledCheckBox = styled.label`
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  display: flex;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;
`;

export const Checker = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid #95bef0;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2px;
  left: 2px;

  &:hover {
    border: 3px solid #95bef0;
  }

  &:hover::before {
    content: "";
    width: 10px;
    height: 10px;
    margin: auto;
    background-color: transparent;
  }
`;

export const SwitchChecker = styled.div<{ checkedValue: boolean }>`
  content: "";
  width: 10px;
  height: 10px;

  position: absolute;
  top: 7px;
  left: 7px;
  background-color: #00d2ff;
  transform: scale(1.2);
  transition: all 0.2s linear;

  display: ${({ checkedValue }) => (checkedValue ? "block" : "none")};
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const ContainerAgree = styled.div`
  position: absolute;
  top: 0;
  left: 42px;
`;

export const AgreeTitle = styled.span`
  font-size: 13px;
  line-height: 16px;
  color: #5a646e;
`;

export const AgreeSpan = styled.span`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  color: #666e76;
`;
