import React from "react";
import styled from "styled-components";

export const StyledGraph = styled.div`
  width: 100%;
`;

export const Diagrams = styled.div`
  width: 100%;
  height: 191px;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    height: 200px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1024px) {
    height: 144px;
    margin-bottom: 16px;
  }
`;

export const VerticalLine = styled.div`
  height: 100%;
  width: 1px;
  background: #e4e4e4;
`;

export const Years = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 24px;
  }
`;

export const YearTitle = styled.p`
  display: block;
  font-size: 11px;
  color: #96a0aa;
`;

export const Subgraph = styled.div`
  width: 100%;
  display: block;

  @media screen and (min-width: 576px) {
    display: flex;
  }
`;

export const ContainerTitles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  &:first-of-type {
    margin-right: 43px;
    margin-bottom: 12px;

    @media screen and (min-width: 576px) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 576px) {
    justify-content: space-between;
  }
`;

export const Point = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const PointPurple = styled(Point)`
  background-color: rgb(105, 16, 156);
`;

export const PointYellow = styled(Point)`
  background-color: yellow;
`;

export const Title = styled.p`
  font-size: 13px;
  color: #5a646e;
  position: relative;
`;

const Graph = () => {
  return (
    <StyledGraph>
      <Diagrams>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
        <VerticalLine></VerticalLine>
      </Diagrams>

      <Years>
        <YearTitle>2021</YearTitle>
        <YearTitle>2024</YearTitle>
        <YearTitle>2027</YearTitle>
        <YearTitle>2030</YearTitle>
        <YearTitle>2033</YearTitle>
        <YearTitle>2036</YearTitle>
        <YearTitle>2040</YearTitle>
        <YearTitle>2043</YearTitle>
      </Years>

      <Subgraph>
        <ContainerTitles>
          <PointPurple />
          <Title>Инвестиционный доход</Title>
        </ContainerTitles>

        <ContainerTitles>
          <PointYellow />
          <Title>Ежемесячные взносы</Title>
        </ContainerTitles>
      </Subgraph>
    </StyledGraph>
  );
};

export default Graph;
