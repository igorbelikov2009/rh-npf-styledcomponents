import styled from "styled-components";

export const StyledSelector = styled.div`
  display: block;
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const TitleContainer = styled.div`
  max-width: 546px;
  position: relative;
`;

export const Border = styled.div<{ isvisible: boolean }>`
  width: 100%;
  border-radius: 5px;
  position: relative;

  border: ${({ isvisible }) => (isvisible ? "border: 1px solid #e4e4e4" : "border: 1px solid #fff")};
`;

export const DateContainer = styled.div<{ isvisible: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.36s ease;

  background-color: ${({ isvisible }) => (isvisible ? "#d0f0f6d1" : "#ffffff")};
`;

export const DateSelector = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #28323c;
  font-weight: 400;
  padding-left: 8px;
`;

export const DateValue = styled.p`
  display: block;
  padding: 18px 12px;
  font-size: 14px;
  line-height: 18px;
  color: #28323c;
  font-weight: 400;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 8px;
`;

export const IconRotated = styled.img<{ isvisible: boolean }>`
  width: 18px;
  height: 18px;
  flex: none;
  cursor: pointer;
  transition: transform 0.28s;
  transition-property: transform;
  transition-duration: 0.28s;
  transition-timing-function: ease;
  transition-delay: 0s;

  transform: ${({ isvisible }) => (isvisible ? "scaleY(0.7) rotate(180deg)" : "scaleY(0.7) rotate(0deg)")};
`;

export const WhiteLine = styled.div<{ isvisible: boolean }>`
  width: calc(100% - 16px);
  background-color: #fff;
  position: absolute;
  bottom: 6px;
  left: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${({ isvisible }) => (isvisible ? "2px" : "1px")};
  transition: ${({ isvisible }) => (isvisible ? "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "width 0.7s ease-out")};
`;

export const BlackLine = styled.div<{ isvisible: boolean }>`
  background-color: black;
  height: ${({ isvisible }) => (isvisible ? "2px" : "1px")};
  width: ${({ isvisible }) => (isvisible ? "0" : "50%")};
  transition: ${({ isvisible }) => (isvisible ? "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "width 0.7s ease-out")};
`;
