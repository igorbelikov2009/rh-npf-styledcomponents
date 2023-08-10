import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  border-top: 1px solid #e4e4e4;
  padding: 24px;
`;
export const ID = styled.h3`
  display: block;
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 18px;
  color: #28323c;
`;
export const Title = styled.p`
  display: block;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
  color: black;

  @media screen and (min-width: 768px) {
    font-size: 34px;
    line-height: 48px;
  }
`;
export const Date = styled.p`
  display: block;
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 18px;
  color: #28323c;
`;
export const Paragraph = styled.p`
  margin: 12px 0;
  color: #5a646e;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  vertical-align: baseline;
  box-sizing: border-box;
  position: relative;
  margin-left: 32px;
`;
export const ContainerButton = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
`;
