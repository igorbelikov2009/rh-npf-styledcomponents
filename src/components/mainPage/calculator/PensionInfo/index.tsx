import React, { FC } from "react";
import {
  Calculation,
  CalculationContainer,
  Container,
  InFuture,
  InFutureContainer,
  Pension,
  Social,
  Span,
  Storage,
  StyledPensionInfo,
  Sum,
  Title,
} from "./styles";

interface PensionInfoProps {
  pensionValue: number;
  generalAccumValue: number;
}

const PensionInfo: FC<PensionInfoProps> = ({ pensionValue, generalAccumValue }) => {
  return (
    <StyledPensionInfo>
      <Container>
        <InFuture>
          <InFutureContainer>
            <Pension> {pensionValue} ₽. </Pension>

            <Title>
              Пенсия
              <Span> в будущем</Span>
            </Title>
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
