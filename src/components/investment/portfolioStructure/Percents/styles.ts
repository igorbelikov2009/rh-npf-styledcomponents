import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: 0;
  margin-top: 48px;

  @media screen and (min-width: 768px) {
    width: calc(100% - 280px);
    margin-left: 20px;
    margin-top: 0px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Block = styled.div`
  width: calc(50% - 24px);
  margin: 0 12px;
  margin-bottom: 24px;
  display: block;

  @media screen and (min-width: 578px) {
    display: flex;
  }
`;

export const Percents00 = styled.p`
  position: relative;
  width: 25%;
  padding-left: 16px;
  font-size: 18px;
  line-height: 24px;
  color: black;

  &::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    position: absolute;
    top: 8px;
    left: 0px;
  }
`;

export const Percents01 = styled(Percents00)`
  &::before {
    background-color: rgb(69, 194, 83);
  }
`;

export const Percents02 = styled(Percents00)`
  &::before {
    background-color: rgb(214, 223, 94);
  }
`;

export const Percents03 = styled(Percents00)`
  &::before {
    background-color: rgb(197, 94, 223);
  }
`;

export const Percents04 = styled(Percents00)`
  &::before {
    background-color: rgb(146, 39, 6);
  }
`;

export const Percents05 = styled(Percents00)`
  &::before {
    background-color: rgb(94, 204, 223);
  }
`;

export const Percents06 = styled(Percents00)`
  &::before {
    background-color: rgb(22, 22, 20);
  }
`;

export const Title = styled.p`
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
  width: 75%;
  margin-left: 24px;
`;
