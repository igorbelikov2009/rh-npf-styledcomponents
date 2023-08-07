import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;

  &:first-of-type {
    padding-top: 0;
  }
`;

export const Title = styled.p`
  width: 100%;
  max-width: 560px;
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;

  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`;

export const Index = styled.p`
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
  margin-left: 12px;

  @media screen and (min-width: 576px) {
    font-size: 16px;
    margin-left: 40px;
  }
`;
