import styled from "styled-components";

export const StyledCarouselCard = styled.label<{ active: boolean }>`
  min-width: 200px;
  padding: 24px;
  margin-right: 24px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    left: 0px;
    top: 0px;
    transition: box-shadow 0.3s, width 0.3s, height 0.3s, top 0.3s, left 0.3s;

    width: ${({ active }) => (active ? "calc(100% + 8px)" : "100%")};
    height: ${({ active }) => (active ? "calc(100% + 8px)" : "100%")};
    box-shadow: ${({ active }) => (active ? "0px 4px 6px #d2dce6" : "")};
  }
`;

export const IconContainer = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    margin-bottom: 48px;
  }
`;

export const Title = styled.p`
  display: block;
  min-width: 140px;
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
  margin-bottom: 48px;
`;
