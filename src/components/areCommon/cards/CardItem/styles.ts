import styled from "styled-components";

export const CardItems = styled.div`
  width: 100%;
  padding: 24px;
  border-top: 1px solid #e4e4e4;
  display: flex;

  @media screen and (min-width: 576px) {
    display: block;
    width: 33.33%;
    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }

  @media screen and (min-width: 768px) {
    width: 25%;
  }

  @media screen and (min-width: 1160px) {
    width: 20%;
  }
`;

export const ContainerIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 0;
  margin-right: 24px;

  @media screen and (min-width: 576px) {
    margin-bottom: 72px;
    margin-right: 0;
  }
`;

export const Description = styled.div``;

export const CardTitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #28323c;
  margin-bottom: 12px;

  @media screen and (min-width: 576px) {
    margin-bottom: 24px;
  }
`;

export const CardTitleSpan = styled.span`
  display: block;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
`;

export const CardSubtitle = styled.p`
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
`;
