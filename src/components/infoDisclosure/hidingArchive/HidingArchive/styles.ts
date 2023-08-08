import styled from "styled-components";

export const StyledHidingArhive = styled.section<{ visible: boolean }>`
  width: 50%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  transition: left 500ms ease;

  left: ${({ visible }) => (visible ? "50%;" : "100%;")};
`;

export const Background = styled.div<{ visible: boolean }>`
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;

  position: ${({ visible }) => (visible ? "fixed" : "absolute")};
  opacity: ${({ visible }) => (visible ? "0.16" : "0")};
`;

export const Container = styled.div<{ visible: boolean }>`
  width: 50vw;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding-top: 48px;
  background: #fff;
  box-shadow: 0px 8px 8px gray;
  padding-right: 24px;
  padding-left: 24px;
  transition: left 500ms ease;

  left: ${({ visible }) => (visible ? "50%" : "100%")};

  @media screen and (min-width: 576px) {
    padding-right: 28px;
    padding-left: 28px;
  }
`;

export const Wrapper = styled.div`
  overflow: auto;
  height: 100%;
`;

export const TopBlock = styled.div<{ visible: boolean }>`
  width: 50%;
  position: fixed;
  top: 0;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #fff 20.31%, hsla(0, 0%, 100%, 0.72) 80.5%, hsla(0, 0%, 100%, 0));
  background-color: #fff;
  padding-right: 24px;
  padding-left: 24px;
  transition: left 500ms ease;

  left: ${({ visible }) => (visible ? "50%" : "100%")};

  @media screen and (min-width: 576px) {
    width: 50%;
    padding-right: 28px;
    padding-left: 28px;
  }
`;

export const Heading = styled.p`
  font-size: 34px;
  line-height: 48px;
  font-weight: 400;
  color: black;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;
