import { styled } from "styled-components";

export const StyledTable = styled.div`
  width: 100%;
  background-color: #fff;
  overflow-x: scroll;

  @media screen and (min-width: 960px) {
    overflow-x: hidden;
  }
`;

export const TableContainer = styled.div`
  width: 960px;
`;

export const Tr = styled.tr`
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
`;

export const Th = styled.th`
  text-align: left;
  vertical-align: baseline;
  box-sizing: border-box;
  font-weight: 400;
  color: #5a646e;
  font-size: 13px;
  line-height: 24px;
  padding: 8px 12px;

  &:first-of-type {
    padding: 8px 12px 8px 0;
  }

  &:last-of-type {
    padding: 8px 0 8px 12px;
  }
`;

export const Td = styled.td`
  vertical-align: baseline;
  box-sizing: border-box;
  border-top: 1px solid #e6f0fa;
  color: #28323c;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 12px;

  &:first-of-type {
    padding: 8px 12px 8px 0;
  }

  &:last-of-type {
    padding: 8px 0 8px 12px;
  }
`;
