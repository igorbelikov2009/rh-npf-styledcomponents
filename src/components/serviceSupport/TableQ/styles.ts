import styled from "styled-components";

export const StyledTable = styled.div`
  width: 100%;
  position: relative;
  overflow-x: auto;

  @media screen and (min-width: 1024px) {
    overflow-x: hidden;
  }
`;

export const Container = styled.div`
  color: #001100;
  border-collapse: collapse;
  width: 804px;
  margin: 10px 0;
  position: relative;

  @media screen and (max-width: 576px) {
    &::before {
      position: absolute;
      display: block;
      width: 24px;
      top: 0;
      bottom: 0;
      background-image: radial-gradient(farthest-side, rgba(26, 65, 101, 0.5), transparent);
      content: "";
      right: auto;
      left: -12px;
    }

    &::after {
      position: absolute;
      display: block;
      width: 24px;
      top: 0;
      bottom: 0;
      background-image: radial-gradient(farthest-side, rgba(49, 103, 155, 0.5), transparent);
      content: "";
      right: -12px;
      left: auto;
      box-sizing: inherit;
    }
  }
`;

export const Tr = styled.tr`
  width: 100%;
  border-top: 1px solid #e6f0fa;
  vertical-align: baseline;
`;

export const Td = styled.td`
  padding: 0 8px;

  &:nth-of-type(1) {
    width: 43.16%;
    padding-left: 0;
  }

  &:nth-of-type(2) {
    width: 27.1%;
  }

  &:nth-of-type(3) {
    width: 29.74%;
    padding-right: 0;
  }
`;

export const HeadersRow = styled.p`
  font-size: 13px;
  color: #001100;
  line-height: 1.5rem;
  margin: 12px 0;
  font-weight: 700;
`;

export const CellRow = styled.p`
  font-size: 16px;
  color: #001100;
  line-height: 1.5rem;
  margin: 12px 0;
  font-weight: 500;
`;
