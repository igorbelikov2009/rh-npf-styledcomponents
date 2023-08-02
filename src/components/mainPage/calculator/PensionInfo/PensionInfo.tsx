import React, { FC } from "react";
import styled from "styled-components";

interface PensionInfoProps {
  pensionValue: number;
  generalAccumValue: number;
}

export const StyledPensionInfo = styled.div`
  width: 100%;
  margin-bottom: 24px;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 576px) {
    width: 29.41%;
    border-top: none;
    border-bottom: none;
    display: block;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    width: 47.92%;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    display: block;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const InFuture = styled.div`
  padding: 24px;
  width: 46.25%;
  margin-right: 0;
  margin-bottom: 0;
  box-sizing: border-box;

  @media screen and (min-width: 576px) {
    width: 100%;
    margin-bottom: 24px;
    border: 1px solid #e4e4e4;
  }

  @media screen and (min-width: 1024px) {
    width: 35.85%;
    margin-right: 24px;
    margin-bottom: 0;
  }
`;

export const InFutureContainer = styled.div`
  width: 100%;
  border-right: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    border-right: none;
  }
`;

export const Pension = styled.p`
  color: #28323c;
  margin-bottom: 96px;
  font-size: 34px;
  line-height: 48px;

  @media screen and (min-width: 576px) {
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 96px;
    font-size: 28px;
    line-height: 48px;
  }
`;

export const Title = styled.p`
  font-size: 13px;
  color: #5a646e;
`;

export const Span = styled.span`
  display: block;
  font-size: inherit;
  color: inherit;

  @media screen and (min-width: 576px) {
    display: inline;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1024px) {
    display: block;
    margin-bottom: 0;
  }
`;

export const Storage = styled.div`
  width: 100%;
  border-right: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    border-right: none;
  }
`;

export const Calculation = styled.div`
  width: 100%;
  padding: 24px;

  &:last-of-type {
    padding-top: 0;
    margin-top: 24px;
  }
`;

export const Sum = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #0a0a0a;
`;

export const CalculationContainer = styled.div`
  border-top: 1px solid #e4e4e4;
`;

export const Social = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #0a0a0a;
  margin-top: 24px;
`;

const PensionInfo: FC<PensionInfoProps> = ({ pensionValue, generalAccumValue }) => {
  return (
    <StyledPensionInfo>
      <Container>
        <InFuture>
          <InFutureContainer>
            <Pension> {pensionValue} ₽. </Pension>
            <Title>Пенсия </Title>
            <Span> в будущем</Span>
          </InFutureContainer>
        </InFuture>

        <Storage>
          <Calculation>
            <Sum>{generalAccumValue} ₽.</Sum>
            <Title> Накоплено </Title>
          </Calculation>

          <Calculation>
            <CalculationContainer>
              <Social> 273 000 ₽.</Social>
              <Title> Размер соц. вычета </Title>
            </CalculationContainer>
          </Calculation>
        </Storage>
      </Container>
    </StyledPensionInfo>
  );
};

export default PensionInfo;
