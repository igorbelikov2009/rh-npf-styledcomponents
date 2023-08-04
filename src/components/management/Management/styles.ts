import styled from "styled-components";

export const StyledManagement = styled.div`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 944px) {
    flex-wrap: nowrap;
  }
`;

export const Content = styled.div`
  max-width: 760px;
  width: 100%;
  order: 1;
  margin-bottom: 72px;

  @media screen and (min-width: 944px) {
    order: 0;
  }
`;

export const Department = styled.div`
  padding: 72px 24px 48px;
  border-bottom: 1px solid #e6f0fa;
  box-sizing: content-box;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    padding: 72px 0 24px;
  }

  @media screen and (min-width: 944px) {
    padding-top: 48px;
  }

  &:last-of-type {
    padding-bottom: 124px;
  }
`;

export const BarContainer = styled.div`
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 944px) {
    width: 352px;
    margin-left: 48px;
    overflow: hidden;
  }
`;

export const BarPosition = styled.aside<{ absolute: boolean }>`
  width: 100%;
  height: 72px;
  padding: 24px;
  top: 0;
  left: 0;
  box-shadow: 0 4px 6px rgb(155, 194, 229);
  background: #fff;
  overflow-x: auto;
  display: inline-flex;
  transition: box-shadow 0.3s;

  position: ${({ absolute }) => (absolute ? "absolute" : "fixed")};

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 9em;
  }

  @media screen and (min-width: 944px) {
    width: auto;
    height: auto;
    padding: 0 0 0 48px;
    left: inherit;
    box-shadow: none;
    display: block;
    margin-top: 48px;
  }
`;

export const BarIcon = styled.div`
  width: 24px;
  height: 24px;
  transform: rotate(0.75turn);
  display: none;
  position: absolute;
  top: 0px;
  left: 0;
  transition: top 0.3s;

  @media screen and (min-width: 944px) {
    display: block;
  }
`;
